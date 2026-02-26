import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardProvider } from "./context/DashboardContext";
import DashboardLayout from "./pages/DashboardLayout";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Users from "./pages/Users";
import "./index.css";

function App() {
  return (
    <DashboardProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </DashboardProvider>
  );
}

export default App;