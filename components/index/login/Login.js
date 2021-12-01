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
import { loggin, loginEmailAndPassword } from "../../../context/actions";
import { GoogleLogin } from "react-google-login";
import { useAlert } from "react-alert";

const Login = (props) => {
  const { value } = useAppContext();
  const { state, dispatch } = value;
  const { logged } = state;
  const alert = useAlert();
  
  const [formValues, handleInputChange] = useForm({
    correo: "",
    password: "",
  });
  const { correo, password } = formValues;
  console.log(state);
  const handleCredentialResponse = (response) => {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const body = { id_token: response.tokenId };
    console.log(response.tokenId);
    let url = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/api/auth/google"
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
        closeLogin()
      })
      .catch(console.warn);
  };

  const closeLogin = () => {
    props.setLogin(false);
  };

  const login = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/auth/login", {
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
        }else{
           dispatch(loggin(res.usuario));
           localStorage.setItem("correo", res.usuario.correo);
           localStorage.setItem("token", res.token);
           closeLogin();
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
      <LoginContent>
        <ButtonCerrar onClick={closeLogin}>
          <FontAwesomeIcon icon={faWindowClose} size="2x" color="red" />
        </ButtonCerrar>
        <h2>Iniciar Sesion</h2>
        <FormLogin>
          <input
            type="text"
            onChange={handleInputChange}
            name="correo"
            placeholder="Correo"
            value={correo}
          />
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
        <span>
          No tienes cuenta <Link href="">Registrate </Link>{" "}
        </span>
      </LoginContent>
    </>
  );
};

export default Login;
