import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import path from "../../path/path";
import Loading from "../Loading/Loading";

const LoginSwimmer = () => {
  const { users } = useUser();
  const navigate = useNavigate();

  const newUser = users[users.length - 1];
  useEffect(() => {
    newUser
      ? navigate(`${path.register}/${newUser.id}`)
      : navigate(path.registerUser);
  }, [navigate, newUser]);

  return <Loading />;
};

export default LoginSwimmer;
