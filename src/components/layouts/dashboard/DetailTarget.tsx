import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import type { TargetData } from "../../../type";
import useDeleteTarget from "../../../hooks/useDeleteTarget";
import { useAddFunds, useFetchFunds } from "../../../hooks/useFunds";

const DetailTarget = () => {
  const { targetId } = useParams();

  const mutation = useAddFunds();

  const [getUserId, setGetUserId] = useState<string>("");

  const { data, isError, error } = useFetchFunds(getUserId, targetId!);

  const fundData = Array.isArray(data) ? data : [];
  const deleteTarget = useDeleteTarget();

  const [isAddedfunds, setIsAddedFunds] = useState<boolean>(false);
  const [fundsAmount, setFundsAmount] = useState<number>(1);

  const [targetName, setTargetName] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<number>(0);
  const [currentAmount, setCurrentAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          setGetUserId(user.uid);
          if (!targetId) {
            alert("Cannot find data with this id!!");
            return;
          }
          const docRef = doc(db, "Users", user.uid, "Target", targetId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const docData = docSnap.data() as TargetData;

            setTargetName(docData.targetName);
            setTargetAmount(docData.targetAmount);
            setCurrentAmount(docData.currentAmount);
          }
          setLoading(false);
        } catch (err) {
          setLoading(false);
          throw new Error(`Cannot get detail data : ${err}`);
        }
      }
    });

    return () => unsubs();
  }, [targetId, ]);

  const percentage = (currentAmount / targetAmount) * 100;

  if (isError) {
    return <p>{`Cannot fetch Data: ${error.message}`}</p>;
  }
  return (
    <>
      {loading ? (
        <div className="py-12 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 p-8">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Target Things
          </h2>

          <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-md border space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Target Name
                </label>
                <p className="text-lg font-medium text-gray-800">
                  {targetName}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Target Amount
                </label>
                <p className="text-lg font-medium text-gray-800">
                  {targetAmount}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Current Amount
                </label>
                <p className="text-lg font-medium text-gray-800">
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

            {fundData.length === 0 ? (
              <>
                <p>You dont have funds here</p>
              </>
            ) : (
              fundData.map((data) => (
                <>
                  <div key={data.fundId}>
                    <p>{data.fundsAmount}</p>
                    <p>{data.date}</p>
                  </div>
                </>
              ))
            )}

            {isAddedfunds && (
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Funds Amount
                </label>
                <input
                  value={fundsAmount}
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setFundsAmount(Number(e.target.value));
                  }}
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!targetId || !fundsAmount) {
                      alert("Unknown Target Id, or undefined funds amount!");
                      return;
                    }
                    mutation.mutate({
                      userId: getUserId,
                      targetId: targetId,
                      newFunds: {
                        fundsAmount,
                        targetId,
                      },
                    });
                  }}
                >
                  Add Funds
                </button>
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-center pt-4 border-t">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsAddedFunds((prev) => !prev);
                }}
                className="py-2 px-6 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all"
              >
                {isAddedfunds ? "Cancel" : "Add Funds"}
              </button>

              <Link
                to={`/dashboard/edit-target/${targetId}`}
                className="py-2 px-6 rounded-lg bg-yellow-100 text-yellow-800 font-semibold hover:bg-yellow-200 transition-all"
              >
                Edit
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!targetId) {
                    alert("Cannot delete selected data");
                    return;
                  }
                  deleteTarget.mutate({ userId: getUserId, targetId });
                }}
                className="py-2 px-6 rounded-lg bg-red-100 text-red-800 font-semibold hover:bg-red-200 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailTarget;
