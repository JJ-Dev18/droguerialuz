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
     console.log(resp);
     if (resp.errors) {
       for (let error in resp.errors) {
         alert.info(`${resp.errors[error].msg}`);
       }
     } else {
       alert.success(resp.message);
       dispatch(loggin(formValues));
       closeRegister();
     }
   });
  }
  return (
    <LoginContent>
      <ButtonCerrar onClick={props.closeRegister}>
        <FontAwesomeIcon icon={faWindowClose} size="2x" color="red" />
      </ButtonCerrar>
      <h2>Registro</h2>
      <FormLogin>
        <input
          type="email"
          name="correo"
          value={correo}
          placeholder="correo"
          onChange={handleInputChange}
          require="true"
        />
        <input
         value={password}
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInputChange}
          require="true"
        />
        <input
         value={nombre}
          type="text"
          name="nombre"
          placeholder="nombre"
          onChange={handleInputChange}
          require
        />
        <input
        value={cedula}
          type="text"
          name="cedula"
          placeholder="cedula"
          onChange={handleInputChange}
          require
        />
        <input
          value={telefono}
          type="text"
          name="telefono"
          placeholder="telefono"
          onChange={handleInputChange}
          require="true"
        />
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
    </LoginContent>
  );
}
 
export default Register;