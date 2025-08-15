import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTarget = async ({userId, targetId} : {userId:string, targetId:string}) => {

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

const useDeleteTarget = () => {
      const queryClient = useQueryClient()

      return useMutation({
        mutationFn: deleteTarget,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["targets"]})
        }
      })
}

export default useDeleteTarget;