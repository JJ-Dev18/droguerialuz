import { ButtonCarrito, ButtonComprar, ContentButtonsProductos, ContentImage, ContentProducto, Descuento, InfoProducto } from "./productoStyles";
import Link from 'next/link'
import { useAlert } from "react-alert";
import useAppContext from "../../../context/Store";
const Producto = (props) => {
  const alert = useAlert();
  const { value } = useAppContext()
  const { state , dispatch} = value
  const addCarrito = (e)=> {
    e.preventDefault()
    dispatch({ type: "CART_ADD_ITEM", payload: { ...props, quantiti: 1 } });
     alert.show("Producto agregado al carrito");
  }
  return (
    <Link href={`/producto/${props.id}`} passHref>
      <ContentProducto>
        <Descuento cel="12px" pc="16px">
          30%
        </Descuento>
        <ContentImage>
          <img
            src="https://www.larebajavirtual.com/images/productos/sii/F/300x300/dolex_gripa-30363-1626291131.png"
            alt="producto imagen"
          />
        </ContentImage>
        <InfoProducto>
          <h1>{props.nombre}</h1>
          <span>Antes $35.000</span>
          <ContentButtonsProductos>
            <ButtonComprar>Ahora $ {props.price}</ButtonComprar>
            <ButtonCarrito onClick={addCarrito}>
              <img
                src="/index/header/carrito.svg"
                alt="imagen boton carrito"
                width="25px"
              />
            </ButtonCarrito>
          </ContentButtonsProductos>
        </InfoProducto>
      </ContentProducto>
    </Link>
  );
}
 
export default Producto;