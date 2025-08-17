import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, } from "../../../config/firebase";
import useLatestTransaction from "../../../hooks/useLatestTransaction";
import type { TransactionData } from "../../../type";

const LatestTransaction = () => {
  const [getUserId, setGetUserId] = useState<string>("")

  const {data, isLoading, isError, error} = useLatestTransaction(getUserId)

  const transactionData = data as TransactionData;

  const setDate = new Date();
  const currentDate = `${setDate.getDate()}/${
    setDate.getMonth() + 1
  }/${setDate.getFullYear()}`;

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
       setGetUserId(user.uid)
      }
    });
    return () => unsubs();
  }, []);

  if(isError){
    return <p>{`Cannot show latest data : ${error}`}</p>
  }

  return (
    <>
      {isLoading ? (
        <>
          <div className="py-12">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          </div>
        </>
      ) : !transactionData ? (
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-white flex flex-col justify-center w-full sm:w-[20rem] h-[9rem] shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="text-xl font-bold text-center text-indigo-600">
              Income
            </span>
            <span className="text-sm text-gray-500 text-center mt-1">-.-</span>
          </div>

          <div className="bg-white flex flex-col justify-center w-full sm:w-[20rem] h-[9rem] shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="text-xl font-bold text-center text-indigo-600">
              Expenses
            </span>
            <span className="text-sm text-gray-500 text-center mt-1">-.-</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-white flex flex-col justify-center w-full sm:w-[20rem] h-[9rem] shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="text-xl font-bold text-center text-indigo-600">
              {transactionData.type}
            </span>
            <span className="text-sm text-gray-500 text-center mt-1">
              {transactionData.type
                ? `${currentDate}: ${transactionData.amount}`
                : "-.-"}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default LatestTransaction;
