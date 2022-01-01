import { useEffect } from "react";
import LoginSwimmer from "../../components/LoginSwimmer/LoginSwimmer";
import useUser from "../../hooks/useUser";

const LoginSwimmerPage = () => {
  const { loadUsers, users } = useUser();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return users && <LoginSwimmer />;
};

export default LoginSwimmerPage;
