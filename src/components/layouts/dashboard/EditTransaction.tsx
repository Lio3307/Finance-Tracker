import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import type { TransactionData } from "../../../type";

const EditTransaction = () => {
  const { editId } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);

  const [userId, setUserId] = useState<string>("");

  const [newName, setNewName] = useState<string>("");
  const [newContext, setNewContext] = useState<string>("");
  const [newAmount, setNewAmount] = useState<number>(0);

  const handlerEdit = async () => {
    if (!newName.trim() || !newContext.trim() || !newAmount) {
      alert("Input Field cannot empty!!");
      return;
    }

    try {
      setEditing(true);
      if (!editId) {
        return (
          <p className="mt-[4rem] text-[2rem] font-bold text-center">
            Transaction data unavaible!
          </p>
        );
      }

      const docRef = doc(db, "Users", userId, "Transaction", editId);
      await updateDoc(docRef, {
        name: newName,
        context: newContext,
        amount: newAmount,
      });
      setEditing(false);
      alert("Data successfully updated!!");
    } catch (err) {
      throw new Error(`Cannot update data : ${err}`);
    }
  };

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          setUserId(user.uid);
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
        <div className="flex justify-center p-6">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md my-auto border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Update Transaction
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
                  required
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
                  required
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

              <div className="flex justify-end">
                <button
                  disabled={editing}
                  className={`px-6 py-3 rounded-md bg-indigo-200 text-indigo-700 text-sm font-medium ${
                    editing
                      ? "cursor-not-allowed"
                      : "hover:bg-indigo-300 cursor-pointer"
                  } flex-1 sm:flex-none `}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handlerEdit();
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTransaction;
