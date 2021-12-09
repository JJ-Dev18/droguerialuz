import { ButtonCarrito, ButtonComprar, ContentButtonsProductos, ContentImage, ContentProducto, Descuento, InfoProducto } from "./productoStyles";
import Link from 'next/link'
import { useAlert } from "react-alert";
import useAppContext from "../../../context/Store";
import { cartAdd } from "../../../context/actions";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'
const Producto = (props) => {
  const alert = useAlert();
  const { value } = useAppContext()
  const { state , dispatch} = value
    

  const addCarrito = useCallback((e) => {
     e.preventDefault();
     dispatch(cartAdd(props));
     alert.success("Producto agregado al carrito");
    },
    [dispatch,alert]
  )
  

  return (
    <Link href={`/producto/${props.idProducto}`} passHref>
      <ContentProducto>
        {props.descuento > 0 && (
          <Descuento cel="12px" pc="16px">
            {props.descuento}%
          </Descuento>
        )}

        <ContentImage>
          <Image src={props.img} alt="producto imagen" layout="intrinsic" width="100%" height="100%"/>
        </ContentImage>
        <InfoProducto>
          <h1>{props.nombre}</h1>
          <span>Antes $35.000</span>
          <ContentButtonsProductos>
            <ButtonComprar>Ahora $ {props.price}</ButtonComprar>
            <ButtonCarrito onClick={addCarrito}>
              <Image
                src="/index/header/carrito.svg"
                alt="imagen boton carrito"
                width="25px"
                height="25px"
                // layout="responsive"
              />
            </ButtonCarrito>
          </ContentButtonsProductos>
        </InfoProducto>
      </ContentProducto>
    </Link>
  );
}
 
export default Producto;