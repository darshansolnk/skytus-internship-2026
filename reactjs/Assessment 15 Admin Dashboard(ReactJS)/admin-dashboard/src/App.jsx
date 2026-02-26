import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import DashboardLayout from "./pages/DashboardLayout";
import Overview from "./pages/Overview";

const Products = lazy(() => import("./pages/Products"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route
            path="products"
            element={
              <Suspense fallback={<h3>Loading Products...</h3>}>
                <Products />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;