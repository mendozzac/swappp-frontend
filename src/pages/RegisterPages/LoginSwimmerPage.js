import { useEffect } from "react";
import LoginSwimmer from "../../components/LoginSwimmer/LoginSwimmer";
import useUser from "../../hooks/useUser";

const LoginSwimmerPage = () => {
  const { loadUsers } = useUser();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return <LoginSwimmer />;
};

export default LoginSwimmerPage;
