import { useEffect , useState } from "react";
import { useRouter } from "next/router";
import useAppContext from "../../context/Store";
import { loggin, logginAdmin, loggoutAdmin, logout } from "../../context/actions";
import AccesoDenegado from "../Admin/AccesoDenegado";

const WithAdminRoute = ({ children }) => {
  const router = useRouter();
  const { value } = useAppContext()
   const { state, dispatch } = value;
   const { adminLogged } = state;
   const [logged, setLogged] = useState(false)
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/comprobarToken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") }),
      })
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
          if (resp.expirado) {
            dispatch(logout());
           localStorage.clear();

          } else {
           
            if (resp[0].rol === 1) {
                
              
              setLogged(true)
            } else {
                router.push("/");
            }
          }
        });
      // TODO MANTENER LA SESION DE EL ADMINISTRADOR
    }else{
      router.push("/")
    }
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!adminLogged) {
  //       router.push("/");
  //       return <h1>Acceso denegado</h1>
  //     }
  //     else{
  //       router.push("/admin")
  //     }
      
  //   }, 2000);
  // }, [adminLogged]);

  

  return (
    <>
      {!logged && <AccesoDenegado />}
      {children}
    </>
  );
};

export default WithAdminRoute;
