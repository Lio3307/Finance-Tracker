import { useParams } from "react-router-dom";
import SignUp from "../components/layouts/auth/SignUp";
import SignIn from "../components/layouts/auth/SignIn";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Auth = () => {

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        window.location.href = "/dashboard/home";
      }
    });

    return () => unsubs();
  }, []);

  const { authType } = useParams();

  return (
    <>
      {authType === "signUp" ? (
        <SignUp />
      ) : authType === "signIn" ? (
        <SignIn />
      ) : (
        <div>
          <p className="text-center text-[2rem] mt-[5rem]">Unknown URL</p>
        </div>
      )}
    </>
  );
};

export default Auth;
