import { collection, getDocs } from "firebase/firestore";
import { type TargetData } from "../type";
import { db, auth } from "../config/firebase";
import { useQuery } from "@tanstack/react-query";

const getTargets = async (uid: string) => {
  if (!auth.currentUser) {
    alert("User not registered!!");
    window.location.href = "/";
    return;
  }
  const collRef = collection(db, "Users", uid, "Target");
  const collSnap = await getDocs(collRef);
  if (!collSnap.empty) {
    return collSnap.docs.map((doc) => ({
      ...(doc.data() as TargetData),
    }));
  }
  return [];
};

const useFetchTargets = (uid: string) => {
  return useQuery({
    queryKey: ["targets"],
    queryFn: () => getTargets(uid),
    enabled: !!uid,
    staleTime: 1000 * 60 * 5,
  });
};

export default useFetchTargets;
