import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import path from "../../path/path";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

const LoginPage = () => {
  const isAuth = useSelector(({ user }) => user.isAuthenticated);

  const navigate = useNavigate();

  useEffect(() => {
    isAuth ? navigate(path.season) : <Loading />;
  });
  return <LoginForm />;
};

export default LoginPage;
