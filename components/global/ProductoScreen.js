import { ButtonCarrito, ButtonComprar, ContentButtonsProductos, Descuento } from "../index/carouselProductos/productoStyles";
import { CardProducto, ContentDetalleProducto, ContentInfoProducto, StyledRate } from "./carouselProctoStyles";
import { CarouselProducto } from "./CarouselProducto";
import useAppContext from "../../context/Store";
import {useAlert} from 'react-alert'
import "rc-rate/assets/index.css";

const ProductoScreen = (props) => {
   const alert = useAlert()
   const { value } = useAppContext()
   const { state, dispatch} = value
  const addCarrito = (e) => {
    e.preventDefault();
    dispatch({ type: "CART_ADD_ITEM", payload: { ...props, quantiti: 1 } });
    alert.show("Producto agregado al carrito");
  };
  return (
    <ContentDetalleProducto>
      <CardProducto>
        <Descuento cel="12px" pc="18px" width="15%">
          30%
        </Descuento>
        <CarouselProducto />
      </CardProducto>
      <ContentInfoProducto>
        <h1>{props.nombre}</h1>
        <p>
          {props.descripcion}
        </p>
        <span>Antes $35.000</span>
        <ContentButtonsProductos space={true}>
          <ButtonComprar>Ahorra ${props.price}</ButtonComprar>
          <ButtonCarrito onClick={addCarrito}>
            <img
              src="/index/header/carrito.svg"
              alt="imagen boton carrito"
              width="25px"
            />
          </ButtonCarrito>
        </ContentButtonsProductos>
        <StyledRate defaultValue={3} />
      </ContentInfoProducto>
    </ContentDetalleProducto>
  );
}
 
export default ProductoScreen;