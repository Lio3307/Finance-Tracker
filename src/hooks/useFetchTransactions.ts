import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import type { TransactionData } from "../type";
import { useQuery } from "@tanstack/react-query";

const fetchTrannsactions = async (uid:string) => {
    try {
        if(!auth.currentUser){
            alert("User not registered!")
            return;
        }
        const collRef = collection(db, "Users", uid , "Transaction")
        const collSnap = await getDocs(collRef)
        if(!collSnap.empty){
            return collSnap.docs.map((doc) => ({
                ...(doc.data() as TransactionData)
            }))
        }
    } catch (err) {
        throw new Error(`Cannot fetching data : ${err}`);
        
    }
}

const useFetchTransactions = (uid: string) => {
    return useQuery({
        queryKey: ["transaction"],
        queryFn:() => fetchTrannsactions(uid),
        enabled: !!uid,
        staleTime: 1000 * 60 * 5,
    })
}

export default useFetchTransactions;