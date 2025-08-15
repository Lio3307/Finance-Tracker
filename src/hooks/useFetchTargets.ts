import { collection,getDocs } from "firebase/firestore";
import { type TargetData } from "../type";
import { db,auth } from "../config/firebase";
import { useQuery } from "@tanstack/react-query";

const getTargets = async () => {

        if(!auth.currentUser){
            alert("User not registered!!")
            window.location.href = "/"
            return;
        
        }
              const collRef = collection(db, "Users", auth.currentUser?.uid, "Target");
              const collSnap = await getDocs(collRef);
              if (!collSnap.empty) {
                return collSnap.docs.map((doc) => ({
                  ...(doc.data() as TargetData),
                }));
              }
            }

const useFetchTargets = () => {
    return useQuery({
        queryKey: ["targets"],
        queryFn: getTargets,
        enabled: !!auth.currentUser
    })
}

export default useFetchTargets;