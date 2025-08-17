import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";
import type { TransactionData } from "../type";
import { useQuery } from "@tanstack/react-query";

const getLatestTransaction = async (userId: string) => {
    try {
        const collRef = collection(db, "Users", userId, "Transaction")
        const q = query(collRef, orderBy("created", "desc"), limit(1))
        const docSnap = await getDocs(q)
        if(!docSnap.empty){
            const doc = docSnap.docs[0]
            return {...doc.data() as TransactionData} 
        } else {
            return {}
        }
    } catch (err) {
        throw new Error(`Cannot get latest data : ${err}`);
    }
}

const useLatestTransaction = (userId:string) =>  {
    return useQuery({
        queryKey: ["latest", userId],
        queryFn: () => getLatestTransaction(userId),
        enabled: !!userId,
        staleTime: 1000 * 60 * 5
    })
}
export default useLatestTransaction;