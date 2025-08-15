import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import type { TransactionData } from "../type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addTransaction = async (newTransaction: TransactionData) => {
  if (!auth.currentUser) {
    alert("User not registered!");
    return;
  }
  const collRef = collection(db, "Users", auth.currentUser?.uid, "Transaction");
   await addDoc(collRef, newTransaction);

  return {  ...newTransaction };
};

const useAddTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
    },
  });
};

export default useAddTransaction;
