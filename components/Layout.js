import Footer from "./index/footer/Footer";
import Header from "./index/header/Header";
import Login from "./index/login/Login";
import Script from 'next/script'
import { useState } from "react";
import useAppContext from "../context/Store";
import Register from "./index/register/Register";
const Layout = ({ children }) => {

  const [loginOpen, setLogin] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  return (
    <>
      {/* <Script src="https://accounts.google.com/gsi/client" async defer></Script> */}
      {/* <meta
        name="google-signin-client_id"
        content="2644750142-shrdbovtgfkjmlsbsjrd3jjn7k0migvn.apps.googleusercontent.com"
      ></meta> */}
      {loginOpen && <Login setLogin={setLogin} loginOpen={loginOpen} />}
       {registerOpen && <Register setRegister={setRegisterOpen} />}
      <Header setLogin={setLogin}  setRegister={setRegisterOpen}/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
