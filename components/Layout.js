import Footer from "./index/footer/Footer";
import Header from "./index/header/Header";
import Login from "./index/login/Login";
import Cookies from "js-cookie";

import { useCallback, useState, useEffect } from "react";
import useAppContext, { StoreProvider } from "../context/Store";
import Register from "./index/register/Register";
import { loggin, logginAdmin } from "../context/actions";
import { useRouter } from "next/router";
const Layout = ({ children,grupos }) => {

  const [loginOpen, setLogin] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const router = useRouter()
  const { value } = useAppContext()
  const { state , dispatch } = value 
  const { user } = state 
  
  const closeLogin = useCallback(() => {
     setLogin(false)},
    [],)
  const openLogin = useCallback(() => {
      setLogin(true)},
    [],)
    const closeRegister = useCallback(() => {
      setRegisterOpen(false);
    }, []);
    const openRegister = useCallback(() => {
      setRegisterOpen(true);
    }, []);

  useEffect(() => {
    if(localStorage.getItem("token")){
      let user = JSON.parse(Cookies.get("user"));
      if(user.rol === 1){
        dispatch(logginAdmin(user))
        router.push('/admin')
      }
      else{
        dispatch(loggin(user));
      }
    // TODO MANTENER LA SESION DE EL ADMINISTRADOR 
    }
  }, [dispatch,router])

  return (
    <div className="contentPrincipal">
     
      {loginOpen && <Login closeLogin={closeLogin} openRegister={openRegister}/>}
       {registerOpen && <Register closeRegister={closeRegister} openLogin={openLogin}/>}
        
      <Header openLogin={openLogin} openRegister={openRegister}  grupos={grupos}/>

         

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
