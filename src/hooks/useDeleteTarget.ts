import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const useDeleteTarget = (userId: string) => {
  return async function (targetId: string) {
    const confirmDelete = confirm("Are you sure want to delete this data?");
    if (!confirmDelete) return;
    try {
      const docRef = doc(db, "Users", userId, "Target", targetId);
      await deleteDoc(docRef);
      alert('Data succcessfully deleted!!')
      window.location.href = "/dashboard/target";
    } catch (err) {
      throw new Error(`Cannot delete selected data : ${err}`);
    }
  };
};

export default useDeleteTarget;
