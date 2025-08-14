import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../../../config/firebase";

const ModalTarget = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [targetName, setTargetName] = useState<string>("")
    const [targetAmount, setTargetAmount] = useState<number >(1)
    const [currentAmount, setCurrentAmount] = useState<number >(1)

    const [loading, setLoading] = useState<boolean>(false)

    const handleTarget = async () => {
        if(!targetName.trim() || !targetAmount || !currentAmount){
            alert("You must input corrent value in  every input field!!")
            return
        }

        try {
            setLoading(true)
            if(!auth.currentUser){
                alert("user not registered!!")
                return;
            }
            const collRef = collection(db, "Users", auth.currentUser?.uid, "Target")
            const newColl = await addDoc(collRef, {
                userId: auth.currentUser.uid,
                targetName,
                targetAmount,
                currentAmount,
            })
            await updateDoc(newColl, {
                targetId: newColl.id,
            })
            alert("Successfully added new target!!")
            setLoading(false)
            setIsOpen(false)
        } catch (err) {
            setLoading(false)
            throw new Error(`Cannot create target : ${err}`);
            
        }
    }

  return (
    <>
      <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsOpen(true)
      }}
       className=" text-[1.6rem] border-2 hover:text-white hover:bg-indigo-600 cursor-pointer border-indigo-800 text-black font-bold py-[4rem] px-[4.3rem] rounded-[1.2rem]">
        +
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4"
          
        >
          <div
            className="bg-gray-100 rounded-xl shadow-xl p-6 w-[90%] sm:w-full sm:max-w-md relative"
          >
            <button
              className="absolute top-3 right-3 hover:cursor-pointer text-indigo-700 text-[1.8rem] font-bold hover:text-indigo-800 transition"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setTargetName("")
                setTargetAmount(1)
                setCurrentAmount(1)
                setIsOpen(false);
              }}
            >
              X
            </button>

            <h1 className="text-lg font-bold mb-4">New Transaction</h1>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-700">
                Target Name
              </label>
              <input
                required
                value={targetName}
                onChange={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setTargetName(e.target.value);
                }}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-bold text-gray-700">
                Target Amount
              </label>
              <input
                required
                value={targetAmount}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setTargetAmount(Number(e.target.value));
                }}
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm font-bold text-gray-700">
                Current 
              </label>
              <input
                required
                value={currentAmount}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentAmount(Number(e.target.value));
                }}
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end">
                <button
                  disabled={loading}
                  className={`px-6 py-3 rounded-md bg-indigo-200 text-indigo-700 text-sm font-medium ${
                    loading
                      ? "cursor-not-allowed"
                      : "hover:bg-indigo-300 cursor-pointer"
                  } flex-1 sm:flex-none `}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleTarget();
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

export default ModalTarget;
