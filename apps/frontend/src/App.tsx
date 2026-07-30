import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Nodes from "./pages/Nodes";
import Pods from "./pages/Pods";
import Deployments from "./pages/Deployments";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clusters" element={<Nodes />} />
            <Route path="/pods" element={<Pods />} />
            <Route path="/deployments" element={<Deployments />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;