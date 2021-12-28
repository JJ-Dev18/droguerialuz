import {
  ButtonCerrar,
  FormLogin,
  GoogleWrapper,
  LoginContent,
} from "./loginStyles";
import Link from "next/link";
import Script from "next/script";
import { useForm } from "../../../hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import useAppContext from "../../../context/Store";
import { loggin, logginAdmin, loginEmailAndPassword } from "../../../context/actions";
import { GoogleLogin } from "react-google-login";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";


const Login = (props) => {
  const { value } = useAppContext();
  const { state, dispatch } = value;
  const { logged } = state;
  const alert = useAlert();
  const router = useRouter()
  const [formValues, handleInputChange] = useForm({
    correo: "",
    password: "",
  });
  const { correo, password } = formValues;
 
  const handleCredentialResponse = (response) => {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const body = { id_token: response.tokenId };
    
    let url = window.location.hostname.includes("localhost")
      ? `${process.env.NEXT_PUBLIC_API}/api/auth/google`
      : "https://primer-web-server.herokuapp.com/api/auth/google";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch(loggin(resp.usuario));
        
        localStorage.setItem("correo", resp.usuario.correo);
        localStorage.setItem("token", resp.token);
        props.closeLogin()
      })
      .catch(console.warn);
  };

 

  const login = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((resp) => resp.json())
      .then((res) => {
        if (res.msg) {
          alert.error("Credenciales incorrectas");
        } else {
          if(res.usuario.rol == 2){
            dispatch(loggin(res.usuario));
          }
          if(res.usuario.rol == 1 ){
            dispatch(logginAdmin(res.usuario))
            router.push('/admin')
          }
          localStorage.setItem("correo", res.usuario.correo);
          localStorage.setItem("token", res.token);
          props.closeLogin();
        }
      });
  };

  // const logout = () => {
  //   console.log("logiout");
  //   google.accounts.id.disableAutoSelect();
  //   google.accounts.id.revoke(localStorage.getItem("correo"), (done) => {
  //     localStorage.clear();
  //     //  location.reload();
  //   });
  // };

  return (
    <>
      <LoginContent height="350px">
        <ButtonCerrar onClick={props.closeLogin}>
          <FontAwesomeIcon icon={faWindowClose} size="2x" color="red" />
        </ButtonCerrar>
        <h2>Iniciar Sesion</h2>
        <FormLogin >
          <label>Correo Electronico</label>
          <input
            type="text"
            onChange={handleInputChange}
            name="correo"
            placeholder="Correo"
            value={correo}
          />
          <label>Contrasena</label>
          <input
            type="password"
            onChange={handleInputChange}
            name="password"
            placeholder="password"
            value={password}
          />
          <GoogleWrapper>
            <button onClick={login}>Entrar</button>
            <GoogleLogin
              clientId="2644750142-shrdbovtgfkjmlsbsjrd3jjn7k0migvn.apps.googleusercontent.com"
              buttonText=""
              onSuccess={handleCredentialResponse}
              // onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </GoogleWrapper>
        </FormLogin>
        <h4 onClick={()=>{
          props.closeLogin()
          props.openRegister()
        }}>
          Registrate
        </h4>
      </LoginContent>
    </>
  );
};

export default Login;
