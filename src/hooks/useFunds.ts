import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import type { Funds } from "../type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addFunds = async ({userId, targetId, newFunds}: {userId: string, targetId: string, newFunds: Funds}) => {

        const collRef = collection(db, "Users", userId, "Target", targetId, "Funds")
        const newColl = await addDoc(collRef, newFunds)
        await updateDoc(newColl, {
            fundsId: newColl.id
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


export {useAddFunds};