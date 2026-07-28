import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Clusters from "./pages/Clusters";
import Pods from "./pages/Pods";
import Deployments from "./pages/Deployments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clusters" element={<Clusters />} />
          <Route path="/pods" element={<Pods />} />
          <Route path="/deployments" element={<Deployments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;