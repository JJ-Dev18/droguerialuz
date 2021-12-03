import { useRouter } from "next/router";
import { useEffect } from "react";
import AccesoDenegado from "../components/Admin/AccesoDenegado";
import WithAdminRoute from "../components/Auth/WithAdminRoute";
import { loggoutAdmin } from "../context/actions";
import useAppContext from "../context/Store";




const Admin = () => {
 const router = useRouter();
 const { value } = useAppContext();
 const { state, dispatch } = value;
 const { adminLogged } = state;
 const cerrarSesion = ()=> {
   dispatch(loggoutAdmin())
   router.push('/')
 }
 if(!adminLogged){
   return <AccesoDenegado />
 }

  return ( <div>
    <p>Administrados Screen</p>
    <button onClick={cerrarSesion}>Cerrar Sesion</button>
  </div> );
}
 
export default Admin;

Admin.Auth = WithAdminRoute