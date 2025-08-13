import { useState } from "react";
import { db, auth } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const Modals = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleTransaction = async () => {
    if (!name.trim() || !context.trim()) {
      alert("input field cannot empty!!");
      return;
    }

    try {
      setLoading(true);
      if (!auth.currentUser) {
        setLoading(false);
        throw new Error("User not registered");
      }
      const collRef = collection(
        db,
        "Users",
        auth.currentUser?.uid,
        "Transaction"
      );
      await addDoc(collRef, {
        userId: auth.currentUser.uid,
        name,
        context,
        amount,
        type,
      });
    } catch (err) {
      throw new Error("Cannot add transaction : " + err);
    }
  };

  return (
    <>
      <button
        className="px-3 py-2 rounded-md bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 flex-1 sm:flex-none cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        New Transaction
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div
            className="bg-gray-100 rounded-xl shadow-xl p-6 w-[90%] sm:w-full sm:max-w-md relative"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <button
              className="absolute top-3 right-3 hover:cursor-pointer text-indigo-700 text-[1.8rem] font-bold hover:text-indigo-800 transition"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              X
            </button>

            <h1 className="text-lg font-bold mb-4">New Transaction</h1>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-700">
                Name
              </label>
              <input
                required
                value={name}
                onChange={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setName(e.target.value);
                }}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-bold text-gray-700">
                Context
              </label>
              <input
                required
                value={context}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setContext(e.target.value);
                }}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-bold text-gray-700">
                Amount
              </label>
              <input
                required
                value={amount}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setAmount(Number(e.target.value));
                }}
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="my-2 font-bold">
                Type <span className="font-bold ml-[0.5rem]">:</span>
              </label>
              <select
                required
                value={type}
                onChange={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setType(e.target.value);
                }}
                className="my-[1rem] ml-[1rem] cursor-pointer bg-indigo-600 text-white font-bold py-[0.3rem] px-[0.7rem] rounded-[0.4rem]"
              >
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
              <br />

              <div className="flex justify-end">
                <button
                  disabled={loading}
                  className={`px-6 py-3 rounded-md bg-indigo-200 text-indigo-700 text-sm font-medium ${
                    loading ? "cursor-not-allowed" : "hover:bg-indigo-300"
                  } flex-1 sm:flex-none cursor-pointer`}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleTransaction();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
