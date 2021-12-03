import { ButtonCarrito, ButtonComprar, ContentButtonsProductos, ContentImage, ContentProducto, Descuento, InfoProducto } from "./productoStyles";
import Link from 'next/link'
import { useAlert } from "react-alert";
import useAppContext from "../../../context/Store";
import { cartAdd } from "../../../context/actions";
const Producto = (props) => {
  const alert = useAlert();
  const { value } = useAppContext()
  const { state , dispatch} = value
  const addCarrito = (e)=> {
    e.preventDefault()
    dispatch(cartAdd(props));
     alert.success("Producto agregado al carrito");
  }

  return (
    <Link href={`/producto/${props.idProducto}`} passHref>
      <ContentProducto>
        {props.descuento > 0 && (
          <Descuento cel="12px" pc="16px">
            {props.descuento}%
          </Descuento>
        )}

        <ContentImage>
          <img
            src={props.img}
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