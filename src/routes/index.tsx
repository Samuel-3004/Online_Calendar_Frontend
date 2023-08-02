import { Routes, Route } from "react-router-dom";
import Page404 from "../pages/404";
import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import PublicRoutes from "../pages/PublicRoutes";
import RegisterPage from "../pages/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
