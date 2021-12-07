import { useSelector } from "react-redux";
// import path from "../path/path";
// import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  return isAuth ? children : "";
};

export default ProtectedRoute;
