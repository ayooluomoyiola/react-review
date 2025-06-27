import { Navigate, useLocation, useParams } from "react-router-dom";
import { useSchoolContext } from "../Public/SchoolContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
  requiredRole?: "admin" | "teacher" | "student";
};

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { currentAccount } = useSchoolContext();
  const location = useLocation();
  const { schoolId } = useParams<{ schoolId: string }>();

  if (!currentAccount) {
    return (
      <Navigate
        to="/schools/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  const { schId, role } = currentAccount;

  if (schoolId && schId !== parseInt(schoolId, 10)) {
    return <p>Access denied: wrong school.</p>;
  }

  if (requiredRole && role !== requiredRole) {
    return <p>Access denied: {requiredRole}s only.</p>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
