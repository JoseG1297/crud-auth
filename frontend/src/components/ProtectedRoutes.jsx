import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { TemplateProvider } from "../context/TemplateContext";

export const ProtectedRoutes = () => {
  const { user, isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <TemplateProvider>
      <Outlet />
    </TemplateProvider>
  ) : (
    <Navigate to="/login" />
  );
};
