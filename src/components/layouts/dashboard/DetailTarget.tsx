import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import type { TargetData } from "../../../type";
import useDeleteTarget from "../../../hooks/useDeleteTarget";

const DetailTarget = () => {
  const { targetId } = useParams();

  const [getUserId, setGetUserId] = useState<string>("");

  const deleteTarget = useDeleteTarget(getUserId);

  const [targetName, setTargetName] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<number>(0);
  const [currentAmount, setCurrentAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const percentage = (currentAmount / targetAmount) * 100;

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
  }, [targetId]);

  return (
    <>
      {loading ? (
        <div className="py-12 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="flex justify-center p-6">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md my-auto border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Target Things
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Target Name
                </label>
                <p>{targetName}</p>
              </div>

              <div>
                <label
                  htmlFor="context"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Target Amount
                </label>
                <p>{targetAmount}</p>
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Current Amount
                </label>
                <p>{currentAmount}</p>
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Progress
                </label>
                <p className="text-sm text-gray-500 mt-1">
                  {percentage.toFixed(1)}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{
                      width: `${
                        currentAmount > targetAmount ? "100" : percentage
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="my-[0.5rem] flex flex-wrap gap-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  className="py-4 px-6 rounded-[0.6rem] bg-indigo-100 cursor-pointer text-indigo-800"
                >
                  Update
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if(!targetId){
                        alert("Cannot delete selected data")
                        return;
                    }
                    deleteTarget(targetId)
                  }}
                  className="py-4 px-6 rounded-[0.6rem] bg-red-100 cursor-pointer text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailTarget;
