import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./components/layouts/auth/SignUp"
import SignIn from "./components/layouts/auth/SignIn"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default App
