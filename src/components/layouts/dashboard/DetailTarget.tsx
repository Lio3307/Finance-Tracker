import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { auth } from "../../../config/firebase";
import useDeleteTarget from "../../../hooks/useDeleteTarget";
import { useAddFunds, useFetchFunds } from "../../../hooks/useFunds";
import useTargetDetail from "../../../hooks/useTargetDetail";

const DetailTarget = () => {
  const { targetId } = useParams();

  const mutation = useAddFunds();

  const [getUserId, setGetUserId] = useState<string>("");

  const { data, isError, error } = useFetchFunds(getUserId, targetId!);
  const {
    data: targetDetailData,
    isLoading,
    isError: targetError,
    error: targetMassageError,
  } = useTargetDetail(getUserId, targetId!);

  const fundData = Array.isArray(data) ? data : [];
  const deleteTarget = useDeleteTarget();

  const [isAddedfunds, setIsAddedFunds] = useState<boolean>(false);
  const [fundsAmount, setFundsAmount] = useState<number>(1);

  const targetName = targetDetailData?.targetAmount;
  const targetAmount = targetDetailData?.targetAmount ?? 0;
  const currentAmount = targetDetailData?.currentAmount ?? 0;

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setGetUserId(user.uid);
      }
    });

    return () => unsubs();
  }, [targetId, targetDetailData]);

  const percentage = (currentAmount / targetAmount) * 100;

  if (targetError) {
    return <p>{`Cannot get data : ${targetMassageError.message}`}</p>;
  }

  if (isError) {
    return <p>{`Cannot fetch Data: ${error.message}`}</p>;
  }
  return (
    <>
      {isLoading ? (
        <div className="py-12 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className=" bg-gray-50 p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
            Target Things
          </h2>

          <div className="flex flex-wrap justify-center gap-4 py-2"> 
             <button
                onClick={() => setIsAddedFunds((prev) => !prev)}
                className="flex-1 sm:flex-none py-2 px-6 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all text-center"
              >
                {isAddedfunds ? "Cancel" : "Add Funds"}
              </button>

              <Link
                to={`/dashboard/edit-target/${targetId}`}
                className="flex-1 sm:flex-none py-2 px-6 rounded-lg bg-yellow-100 text-yellow-800 font-semibold hover:bg-yellow-200 transition-all text-center"
              >
                Edit
              </Link>

              <button
                onClick={() => {
                  if (!targetId) {
                    alert("Cannot delete selected data");
                    return;
                  }
                  deleteTarget.mutate({ userId: getUserId, targetId });
                }}
                className="flex-1 sm:flex-none py-2 px-6 rounded-lg bg-red-100 text-red-800 font-semibold hover:bg-red-200 transition-all text-center"
              >
                Delete
              </button>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-6  rounded-2xl shadow-md border space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Target Name
                </label>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  {targetName}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Target Amount
                </label>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  {targetAmount}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Current Amount
                </label>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  {currentAmount}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Progress
              </label>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {percentage.toFixed(1)}%
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      currentAmount > targetAmount ? "100" : percentage
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            

            {isAddedfunds && (
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-600">
                  Funds Amount
                </label>
                <input
                  value={fundsAmount}
                  onChange={(e) => setFundsAmount(Number(e.target.value))}
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (!targetId || !fundsAmount) {
                      alert("Unknown Target Id, or undefined funds amount!");
                      return;
                    }
                    setFundsAmount(1);
                    mutation.mutate({
                      userId: getUserId,
                      targetId: targetId,
                      newFunds: {
                        fundsAmount,
                        targetId,
                      },
                    });
                  }}
                  className="w-full py-2 px-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all"
                >
                  Add Funds
                </button>
              </div>
            )}

            <div className=" justify-center pt-4 border-t">
              <p className="mb-2">Funds : </p>
              <div className="space-y-3">
              {fundData.length === 0 ? (
                <p className="text-center text-sm text-gray-500">
                  You don’t have funds here
                </p>
              ) : (
                fundData.map((data) => (
                  <div
                    key={data.fundId}
                    className="flex justify-between items-center p-3 rounded-lg border bg-gray-50"
                  >
                    <p className="text-gray-800 font-medium">
                      {data.fundsAmount}
                    </p>
                    <p className="text-sm text-gray-500">{data.date}</p>
                  </div>
                ))
              )}
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailTarget;
