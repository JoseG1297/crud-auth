import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoutes = () => {

    const {user, isAuthenticated} =  useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <Outlet />
    );
};