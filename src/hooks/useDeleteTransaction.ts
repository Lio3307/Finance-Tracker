import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTransaction = () => {
  const queryClient = useQueryClient();



  const deleteTransaction = async ({ idUser, dataId }: { idUser: string; dataId: string }) => {
  const confirmDelete = confirm("Are you sure want to delete this field?");
  if (!confirmDelete) return;

  const docRef = doc(db, "Users", idUser, "Transaction", dataId);
  await deleteDoc(docRef);
  alert("Successfully deleted field!");
};

  return useMutation({
    mutationFn: deleteTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
      alert("Successfully deleted field!");
    }
  });
};

export default useDeleteTransaction;
