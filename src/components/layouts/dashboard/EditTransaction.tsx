import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import type { TransactionData } from "../../../type";

const EditTransaction = () => {
  const { editId } = useParams();

  const [loading, setLoading] = useState<boolean>(true);

  const [newName, setNewName] = useState<string>("");
  const [newContext, setNewContext] = useState<string>("");
  const [newAmount, setNewAmount] = useState<number>(0);

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          if (!editId) {
            return (
              <p className="mt-[4rem] text-[2rem] font-bold text-center">
                Transaction data unavaible!
              </p>
            );
          }
          const docRef = doc(db, "Users", user.uid, "Transaction", editId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const docData = docSnap.data() as TransactionData;
            setNewName(docData.name);
            setNewContext(docData.context);
            setNewAmount(docData.amount);
          }
          setLoading(false);
        } catch (err) {
          setLoading(false);
          throw new Error(`Cannot find transaction data : ${err}`);
        }
      }
    });

    return () => {
      unsubs();
      setNewName("");
      setNewContext("");
      setNewAmount(0);
    };
  }, [editId]);

  return (
    <>
      {loading ? (
        <div className="py-8">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md my-auto border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Tambah Transaksi Baru
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Set new name
                </label>
                <input
                  id="name"
                  value={newName}
                  onChange={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setNewName(e.target.value);
                  }}
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  placeholder="Set new name"
                />
              </div>

              <div>
                <label
                  htmlFor="context"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Set new context
                </label>
                <input
                  id="context"
                  value={newContext}
                  onChange={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setNewContext(e.target.value);
                  }}
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  placeholder="Set new context"
                />
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Set new amount
                </label>
                <input
                  id="amount"
                  value={newAmount}
                  onChange={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setNewAmount(Number(e.target.value));
                  }}
                  type="number"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  placeholder="Set new amount"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTransaction;
