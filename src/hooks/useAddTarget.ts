import { addDoc, collection, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import type { TargetData } from "../type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addTarget = async (newTarget: TargetData) => {
  if (!auth.currentUser) {
    alert("Users not registered");
    window.location.href = "/";
    return;
  }
  const collRef = collection(db, "Users", auth.currentUser.uid, "Target");
  const newSubColl = await addDoc(collRef, newTarget);
  await updateDoc(newSubColl, {
    targetId: newSubColl.id,
  });
  return { ...newTarget };
};

const useAddTarget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTarget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["targets"] });
    },
  });
};

export default useAddTarget;
