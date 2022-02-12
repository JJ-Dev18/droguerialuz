import Layout from "../components/Layout";
import { ContentQuienes } from "../components/quienesSomos/quienesSomosStyles";
import useAppContext from "../context/Store";

const Domicilio = () => {

   const { value } = useAppContext();
   const { state, dispatch } = value;
   const { cart, logged, user } = state;
  return (
    <ContentQuienes>
      {logged ? (
        <h2>Debe haber realizado alguna compra para ver sus Domicilios</h2>
   
      ) : (
        <h3>Debe Iniciar Sesion para comprar</h3>
      )}
    </ContentQuienes>
  );
}
 
export default Domicilio;

Domicilio.Layout = Layout