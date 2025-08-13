import { create } from "zustand";
import { doc, Firestore, setDoc } from "firebase/firestore";
import { type Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

interface AuthStore {
  loading: boolean;
  signUpWithEmail: (
    auth: Auth,
    db: Firestore,
    email: string,
    password: string,
    fullName: string
  ) => Promise<void>;
  signInWithEmail: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<void>;
}

const useAuth = create<AuthStore>((set) => ({
  loading: false,
  signUpWithEmail: async function (auth: Auth, db: Firestore, email: string, password: string, fullName: string) {
    try {
      set({ loading: true });
      const userCredit = await createUserWithEmailAndPassword(auth, email, password);
      if(userCredit){
        const userId = userCredit.user.uid
      const docRef = doc(db, "Users", userId);
      await setDoc(docRef, {
        fullName,
        email,
        userId,
      });
    }
      set({ loading: false });
    } catch (err) {
      throw new Error("Cannot create user account! : " + err);
    }
  },
  signInWithEmail: async function (auth: Auth, email: string, password: string) {
    try {
      set({ loading: true });
      await signInWithEmailAndPassword(auth, email, password);
      set({ loading: false });
    } catch (err) {
      throw new Error("Cannot sign In : " + err);
    }
  },
}));

export default useAuth;
