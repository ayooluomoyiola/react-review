import { useLocation, Navigate } from "react-router-dom";
import type { ReactNode } from "react";

// Mock auth context
const mockUser = {
  isAuthenticated: true,
  role: "admin",
};

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole: "admin" | "teacher" | "student";
}

function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const location = useLocation();

  if (!mockUser.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (mockUser.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
