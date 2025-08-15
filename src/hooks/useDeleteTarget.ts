import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const useDeleteTarget = (userId: string) => {

    return async function(targetId: string) {
        try {
            const docRef = doc(db, "Users", userId, "Target", targetId)
            await deleteDoc(docRef)
        } catch (err) {
            throw new Error(`Cannot delete selected data : ${err}`);
            
        }
    }
}

export default useDeleteTarget;