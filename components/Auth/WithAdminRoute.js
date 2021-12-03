import { useEffect } from "react";
import { useRouter } from "next/router";
import useAppContext from "../../context/Store";

const WithAdminRoute = ({ children }) => {
  const router = useRouter();
  const { value } = useAppContext()
   const { state, dispatch } = value;
   const { adminLogged } = state;

  useEffect(() => {
    if (!adminLogged) {
      router.push("/");
      return <h1>Acceso denegado</h1>
    }
    else{
      router.push("/admin")
    }
  }, []);

  return <>{children}</>;
};

export default WithAdminRoute;
