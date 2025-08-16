import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditTarget = () => {
  const { editTargetId } = useParams();
  const [newTargetName, setNewTargetName] = useState<string>("");
  const [newTargetAmount, setNewTargetAmount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const handleEditTarget = async () => {
    if (!newTargetName.trim() || !newTargetAmount) {
      alert("Input field must be fill corectly!");
      return;
    }

    try {
      if (!auth.currentUser) {
        alert("Cannot find user id, user must registered first!");
        return;
      }
      if (!editTargetId) {
        alert("Cannot find the data with this id");
        return;
      }
      setIsUpdate(true);
      const docRef = doc(
        db,
        "Users",
        auth.currentUser?.uid,
        "Target",
        editTargetId
      );
      await updateDoc(docRef, {
        targetName: newTargetName,
        targetAmount: newTargetAmount,
      });
      alert("Successfully updating data");
      setIsUpdate(false);
    } catch (err) {
      setIsUpdate(false);
      throw new Error(`Cannot update data : ${err}`);
    }
  };

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          if (!editTargetId) {
            alert("Cannot find data with this id");
            return;
          }
          const docRef = doc(db, "Users", user.uid, "Target", editTargetId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const dataDoc = docSnap.data();
            setNewTargetName(dataDoc.targetName);
            setNewTargetAmount(dataDoc.targetAmount);
          }
          setLoading(false);
        } catch (err) {
          setLoading(false);
          throw new Error(`Cannot find edited data : ${err}`);
        }
      }
    });

    return () => {
      unsubs();
      setNewTargetName("");
      setNewTargetAmount(1);
    };
  }, [editTargetId]);

  return (
    <>
      {loading ? (
        <div className="py-12 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="flex justify-center p-6">
          <div className="bg-gray-100 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
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
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter target name"
                  value={newTargetName}
                  onChange={(e) => setNewTargetName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label
                  htmlFor="targetAmount"
                  className="block text-sm font-bold text-gray-700 mb-1"
                >
                  Target Amount
                </label>
                <input
                  id="targetAmount"
                  type="number"
                  required
                  placeholder="Enter target amount"
                  value={newTargetAmount}
                  onChange={(e) => setNewTargetAmount(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="pt-2">
                <button
                  disabled={isUpdate}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleEditTarget();
                  }}
                  className={`w-full py-3 rounded-lg ${
                    isUpdate ? "cursor-not-allowed" : "cursor-pointer"
                  } bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition duration-200`}
                >
                  {isUpdate ? "Updating..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTarget;
