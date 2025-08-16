import { doc, getDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import type { TargetData } from "../type"
import { useQuery } from "@tanstack/react-query"

const getTargetDetail = async({userId, targetId} : {userId:string, targetId:string}) => {
    const docRef = doc(db, "Users", userId, "Target", targetId)
    const docSnap = await getDoc(docRef)
    if(!docSnap.exists()) throw new Error(`Cannot find the spesific data`);
    return {...docSnap.data()} as TargetData
    
}

const useTargetDetail = (userId:string, targetId:string) => {
    return useQuery({
        queryKey: ["targets"],
        queryFn: () => getTargetDetail({userId, targetId}),
        enabled: !!userId && !!targetId,
        staleTime: 1000 * 60 * 5,
    })
}

export default useTargetDetail;