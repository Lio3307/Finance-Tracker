import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";



const useDeleteTransaction = (uid: string) => {

    return async function( dataId: string) {
    const confirmDelete = confirm("Are you sure want to delete this field?")
    if(!confirmDelete) return;
    try {
        const docRef = doc(db, "Users", uid, "Transaction", dataId)
        await deleteDoc(docRef)
        alert("Successfuly delete field!")
    } catch (err) {
        throw new Error(`Cannot delete data : ${err}`);
        
    }
}
}

export default useDeleteTransaction;