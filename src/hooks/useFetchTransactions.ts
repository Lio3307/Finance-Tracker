import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import type { TransactionData } from "../type";
import { useQuery } from "@tanstack/react-query";

const fetchTrannsactions = async (uid: string, type: string) => {
  try {
    if (!auth.currentUser) {
      alert("User not registered!");
      return;
    }
    if (!type.trim()) {
      const collRef = collection(db, "Users", uid, "Transaction");
      const collSnap = await getDocs(collRef);
      if (!collSnap.empty) {
        return collSnap.docs.map((doc) => ({
          ...(doc.data() as TransactionData),
        }));
      }
    } else {
      const collRef = collection(db, "Users", uid, "Transaction");
      const q = query(collRef, where("type", "==", type));
      const collSnap = await getDocs(q);
      if (!collSnap.empty) {
        return collSnap.docs.map((doc) => ({
          ...(doc.data() as TransactionData),
        }));
      }
    }
  } catch (err) {
    throw new Error(`Cannot fetching data : ${err}`);
  }
  return [];
};

const useFetchTransactions = (uid: string, type:string) => {
  return useQuery({
    queryKey: ["transaction", type],
    queryFn: () => fetchTrannsactions(uid, type),
    enabled: !!uid,
    staleTime: 1000 * 60 * 5,
  });
};

export default useFetchTransactions;
