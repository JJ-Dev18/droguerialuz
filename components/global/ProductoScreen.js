import { ButtonCarrito, ButtonComprar, ContentButtonsProductos, Descuento } from "../index/carouselProductos/productoStyles";
import { CardProducto, ContentDetalleProducto, ContentInfoProducto, StyledRate } from "./carouselProctoStyles";
import  CarouselProducto  from "./CarouselProducto";
import useAppContext from "../../context/Store";
import {useAlert} from 'react-alert'
import "rc-rate/assets/index.css";
import { cartAdd } from "../../context/actions";
import { useCallback } from "react";

const ProductoScreen = (props) => {
  //  console.log(props)
   const alert = useAlert()
   const { value } = useAppContext()
   const { state, dispatch} = value

  const addCarrito = useCallback((e) => {
    e.preventDefault();
    dispatch(cartAdd(props));
    alert.success("Producto agregado al carrito");
  }, [dispatch,alert]);
  console.log(props)
  
  return (
    <ContentDetalleProducto>
      <CardProducto>
        {props.descuento > 0 && (
          <Descuento cel="12px" pc="18px" width="15%">
            {props.descuento}%
          </Descuento>
        )}

        <CarouselProducto images={props.images} />
      </CardProducto>
      <ContentInfoProducto>
        <h1>{props.nombre}</h1>
        <p>{props.descripcion}</p>
        <span>Antes $35.000</span>
        {(props.factura != '1') &&
          <h4>Este medicamento necesita formula medica</h4>
        }
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
        <StyledRate
          defaultValue={!props.calificacion ? 0 : props.calificacion}
          disabled
        />
      </ContentInfoProducto>
    </ContentDetalleProducto>
  );
}

 
export default ProductoScreen;