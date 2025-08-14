import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./components/layouts/dashboard/DashboardHome";
import Auth from "./pages/Auth";
import EditTransaction from "./components/layouts/dashboard/EditTransaction";
import Target from "./components/layouts/dashboard/Target";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:authType" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="target" element={<Target />} />
          <Route path="edit/:editId" element={<EditTransaction/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
