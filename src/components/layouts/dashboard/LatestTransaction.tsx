import { useState, useEffect } from "react";
import { type TransactionData } from "../../../type";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";

const LatestTransaction = () => {
  const [transactionData, setTransactionData] =
    useState<TransactionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const setDate = new Date();
  const currentDate = `${setDate.getDate()}/${
    setDate.getMonth() + 1
  }/${setDate.getFullYear()}`;

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const collRef = collection(db, "Users", user.uid, "Transaction");
          const q = query(collRef, orderBy("created", "desc"), limit(1));
          const dataSnap = await getDocs(q);
          if (!dataSnap.empty) {
            const doc = dataSnap.docs[0];
            const lastDoc = {
              ...(doc.data() as TransactionData),
            };
            setTransactionData(lastDoc);
          }
          setLoading(false);
        } catch (err) {
          setLoading(false);
          throw new Error(`Cannot Fetch Data : ${err}`);
        }
      }
    });

    return () => unsubs();
  }, []);

  return (
    <>
      {loading ? (
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
