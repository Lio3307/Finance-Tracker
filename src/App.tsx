import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./components/layouts/auth/SignUp";
import SignIn from "./components/layouts/auth/SignIn";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./components/layouts/dashboard/DashboardHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
