import { types } from "../types/types";
import { useAlert } from "react-alert";


export const loginEmailAndPassword = (formValues) => {
  
  // const alert = useAlert();
  return  (dispatch) => {
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
        // alert.error("Credenciales incorrectas");
      } else {
        dispatch(loggin(res.usuario));
        localStorage.setItem("correo", res.usuario.correo);
        localStorage.setItem("token", res.token);

      }
    });
  };
};
export const loggin = (user) => ({
  type: types.login,
  payload: user,
});

export const logout = () => ({
  type: types.loggout,
});

export const cartAdd = (props) => ({
  type: types.addCart,
  payload: { ...props, quantiti: 1 },
});

export const cartDelete = (props) => ({
  type: types.removeCart,
  payload: { ...props, quantiti: 1 },
});

export const incrementProduct = (id) => ({
  type: types.incrementProduct,
  payload: id
})

export const decrementProduct = (id)=> ({
  type: types.decrementProduct,
  payload: id
})
