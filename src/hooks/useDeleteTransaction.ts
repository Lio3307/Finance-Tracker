import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTransaction = async ({
  idUser,
  dataId,
}: {
  idUser: string;
  dataId: string;
}) => {
  const confirmDelete = confirm("Are you sure want to delete this field?");
  if (!confirmDelete) return;
  try {
    const docRef = doc(db, "Users", idUser, "Transaction", dataId);
    await deleteDoc(docRef);
    alert("Data successfully deleted")
    } catch (err) {
    throw new Error(`Cannot delete selected data : ${err}`);
    
  }

};
const useDeleteTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
    },
  });
};

export default useDeleteTransaction;
