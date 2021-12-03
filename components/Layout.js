import Footer from "./index/footer/Footer";
import Header from "./index/header/Header";
import Login from "./index/login/Login";
import Script from 'next/script'
import { useState } from "react";
import useAppContext, { StoreProvider } from "../context/Store";
import Register from "./index/register/Register";
const Layout = ({ children,grupos }) => {

  const [loginOpen, setLogin] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  
  return (
    <>
     
      {loginOpen && <Login setLogin={setLogin} loginOpen={loginOpen} />}
       {registerOpen && <Register setRegister={setRegisterOpen} />}
        
      <Header setLogin={setLogin}  setRegister={setRegisterOpen}  grupos={grupos}/>

         

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
