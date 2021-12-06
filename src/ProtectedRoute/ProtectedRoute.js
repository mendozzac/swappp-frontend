import path from "../path/path";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  return isAuth ? children : <Navigate to={path.login} />;
};

export default ProtectedRoute;
