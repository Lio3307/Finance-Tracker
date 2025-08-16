import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import type { TransactionData } from "../type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addTransaction = async (newTransaction: TransactionData) => {
  if (!auth.currentUser) {
    alert("User not registered!");
    return;
  }
  const collRef = collection(db, "Users", auth.currentUser?.uid, "Transaction");
  const newDoc = await addDoc(collRef, newTransaction);
  await updateDoc(newDoc, {
    transactionId: newDoc.id,
  });

  return { ...newTransaction };
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
