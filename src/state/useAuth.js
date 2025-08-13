import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { create } from "zustand";
import { doc, setDoc } from "firebase/firestore";

const useAuth = create((set) => ({
  loading: false,
  signUpWithEmail: async function (auth, db, email, password, fullName) {
    try {
      set({ loading: true });
      await createUserWithEmailAndPassword(auth, email, password);
      const docRef = doc(db, "Users", auth?.currentUser.id);
      await setDoc(docRef, {
        fullName,
        email,
        userId: auth?.currentUser.id,
      });
      set({ loading: false });
    } catch (err) {
      throw new Error("Cannot create user account! : " + err);
    }
  },
  signInWithEmail: async function (auth, email, password) {
    try {
      set({ loading: true });
      await signInWithEmailAndPassword(auth, email, password);
      set({ loading: false });
    } catch (err) {
      throw new Error("Cannot sign In : " + err);
    }
  },
}));
