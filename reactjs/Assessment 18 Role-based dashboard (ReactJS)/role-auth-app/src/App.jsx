import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageProducts from "./pages/admin/ManageProducts";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forbidden" element={<Forbidden />} />

            <Route path="/admin/users" element={
              <ProtectedRoute>
                <RoleRoute role="admin">
                  <Layout><ManageUsers /></Layout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

            <Route path="/admin/products" element={
              <ProtectedRoute>
                <RoleRoute role="admin">
                  <Layout><ManageProducts /></Layout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

            <Route path="/user/profile" element={
              <ProtectedRoute>
                <RoleRoute role="user">
                  <Layout><Profile /></Layout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

            <Route path="/user/orders" element={
              <ProtectedRoute>
                <RoleRoute role="user">
                  <Layout><Orders /></Layout>
                </RoleRoute>
              </ProtectedRoute>
            }/>

          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;