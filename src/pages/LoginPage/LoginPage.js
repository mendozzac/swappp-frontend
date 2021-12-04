import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import path from "../../path/path";
import { useEffect } from "react";

const LoginPage = () => {
  const isAuth = useSelector(({ user }) => user.isAuthenticated);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(path.swimmers);
    }
  });
  return <LoginForm />;
};

export default LoginPage;
