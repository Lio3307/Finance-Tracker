import { useParams } from "react-router-dom"
import SignUp from "../components/layouts/auth/SignUp"
import SignIn from "../components/layouts/auth/SignIn"

const Auth = () => {
    const {auth} = useParams()

    return (
        <>
        
        {auth === "signUp" ? (
            <SignUp/>
        ) : auth === "signIn" ? (
            <SignIn/>
        ) : (
            <div>
                <p className="text-center text-[2rem] mt-[5rem]">Unknown URL</p>
            </div>
        )}

        </>
    )
}

export default Auth;