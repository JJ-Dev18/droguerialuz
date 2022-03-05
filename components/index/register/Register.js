import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "../../../hooks/useForm";
import { ButtonCerrar, FormLogin, LoginContent } from "../login/loginStyles";
import {useAlert} from 'react-alert'
import useAppContext from "../../../context/Store";
import { loggin } from "../../../context/actions";
const initialState = {
  correo: "",
  password : "",
  nombre: "" ,
  telefono : "",
  direccion : "",
  cedula: "" 
}
const Register = (props) => {
  const alert = useAlert()
  const { value }= useAppContext()
   const { state, dispatch } = value;
  const [ formValues,handleInputChange] = useForm(initialState)
  
  const { correo,password,nombre,telefono,direccion,cedula} = formValues

  
  const register = (e)=> {
e.preventDefault()
 fetch(`${process.env.NEXT_PUBLIC_API}/api/usuarios`, {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify({ ...formValues, rol: 2 }),
 })
   .then((res) => res.json())
   .then((resp) => {
     
     if (resp.errors) {
       for (let error in resp.errors) {
         alert.info(`${resp.errors[error].msg}`);
       }
     } else {
       alert.success(resp.message);
       dispatch(loggin(formValues));
       props.closeRegister();
     }
   });
  }
  return (
    <LoginContent height="580px">
      <ButtonCerrar onClick={props.closeRegister}>
        <FontAwesomeIcon icon={faWindowClose} size="2x" color="red" />
      </ButtonCerrar>
      <h2>Registro</h2>
      <FormLogin>
        <label>Correo Electronico</label>
        <input
          type="email"
          name="correo"
          value={correo}
          placeholder="correo"
          onChange={handleInputChange}
          require="true"
        />
        <label>Contrasenia</label>
        <input
          value={password}
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInputChange}
          require="true"
        />
        <label>Nombre</label>
        <input
          value={nombre}
          type="text"
          name="nombre"
          placeholder="nombre"
          onChange={handleInputChange}
          require
        />
        <label>Cedula</label>
        <input
          value={cedula}
          type="text"
          name="cedula"
          placeholder="cedula"
          onChange={handleInputChange}
          require
        />
        <label>Telefono</label>
        <input
          value={telefono}
          type="text"
          name="telefono"
          placeholder="telefono"
          onChange={handleInputChange}
          require="true"
        />
        <label>Direccion</label>
        <input
          type="text"
          name="direccion"
          placeholder="direccion"
          value={direccion}
          onChange={handleInputChange}
          require
        />
        <button onClick={register}>Registrarse</button>
      </FormLogin>
      <h4
        onClick={() => {
          props.closeRegister();
          props.openLogin();
        }}
      >
        Iniciar sesion
      </h4>
    </LoginContent>
  );
}
 
export default Register;