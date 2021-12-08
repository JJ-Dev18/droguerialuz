import { useEffect } from "react";
import { useRouter } from "next/router";
import useAppContext from "../../context/Store";

const WithAdminRoute = ({ children }) => {
  const router = useRouter();
  const { value } = useAppContext()
   const { state, dispatch } = value;
   const { adminLogged } = state;
   console.log(adminLogged,"adminLogged")
  useEffect(() => {
    setTimeout(() => {
      if (!adminLogged) {
        router.push("/");
        return <h1>Acceso denegado</h1>
      }
      else{
        router.push("/admin")
      }
      
    }, 2000);
  }, [adminLogged,router]);

  return <>{children}</>;
};

export default WithAdminRoute;
