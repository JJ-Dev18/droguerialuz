import Footer from "./index/footer/Footer";
import Header from "./index/header/Header";
import Login from "./index/login/Login";
import Cookies from "js-cookie";
import { useCallback, useState, useEffect } from "react";
import useAppContext, { StoreProvider } from "../context/Store";
import Register from "./index/register/Register";
import { loggin, logginAdmin, loggoutAdmin, logout } from "../context/actions";
import { useRouter } from "next/router";
const Layout = ({ children }) => {

  const [loginOpen, setLogin] = useState(false)
  const [ grupos , setGrupos ] = useState([])
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
       fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/comprobarToken`,{
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body :JSON.stringify({token :localStorage.getItem("token")})
    }).then(res => res.json())
    .then(resp => {
      console.log(resp)
      if(resp.expirado){
        dispatch(logout());
        localStorage.clear();

      }else{
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: resp[0].idUsuario,
            correo: resp[0].correo,
            nombre: resp[0].nombre,
            direccion: resp[0].direccion,
            rol: resp[0].rol,
            domicilio: null,
            avatar: resp[0].avatar,
          })
        );
        if (resp[0].rol === 1) {
          dispatch(
            logginAdmin({
              id: resp[0].idUsuario,
              correo: resp[0].correo,
              nombre: resp[0].nombre,
              direccion: resp[0].direccion,
              rol: resp[0].rol,
              domicilio: null,
              avatar: resp[0].avatar,
            })
          );
          router.push("/admin");
        } else {
          dispatch(
            loggin({
              id: resp[0].idUsuario,
              correo: resp[0].correo,
              nombre: resp[0].nombre,
              direccion: resp[0].direccion,
              rol: resp[0].rol,
              domicilio: null,
              avatar: resp[0].avatar,
            })
          );
        }
      }
    })
    // TODO MANTENER LA SESION DE EL ADMINISTRADOR 
    }
  }, [dispatch,router])
  
  const getGrupos = async () => {
     const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/grupos/categorias`
  );
  const dataGrupos = await res.json();

  setGrupos(dataGrupos)
  }

  useEffect(() => {
     getGrupos()
  }, [])
  

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
