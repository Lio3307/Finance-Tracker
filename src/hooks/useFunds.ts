import { addDoc, collection, query,  where, getDocs, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../config/firebase";
import type { Funds } from "../type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const addFunds = async ({userId, targetId, newFunds}: {userId: string, targetId: string, newFunds: Funds}) => {

        const collRef = collection(db, "Users", userId, "Target", targetId, "Funds")
        await addDoc(collRef, {...newFunds})

        const targetDocRef = doc(db, "Users", userId, "Target", targetId)
        await updateDoc(targetDocRef, {
            currentAmount: increment(Number(newFunds.fundsAmount)),
        })


    return {...newFunds}
}


//Add funds
const useAddFunds = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addFunds,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["funds"]})
        }
    })
}

const getFunds = async ({userId, targetId}: {userId: string, targetId: string}) => {
    try {
        const collRef = collection(db, "Users", userId, "Target", targetId, "Funds")
        const q = query(collRef, where("targetId", "==", targetId))
        const docSnap = await getDocs(q)
        if(!docSnap.empty){
            return docSnap.docs.map((doc) => ({
                fundId: doc.id,
                ...doc.data()
            }))
        }
    } catch (err) {
        throw new Error(`Cannot get data : ${err}`);
        
    }
    return [];
}

const useFetchFunds = (userId:string, targetId:string) => {
    return useQuery({
        queryKey: ["funds"],
        queryFn:() => getFunds({userId, targetId}),
        enabled: !!userId && !!targetId,
    })
}

export {useAddFunds, useFetchFunds};