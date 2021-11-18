import { ButtonCarrito, ButtonComprar, ContentButtonsProductos, Descuento } from "../index/carouselProductos/productoStyles";
import { CardProducto, ContentDetalleProducto, ContentInfoProducto, StyledRate } from "./carouselProctoStyles";
import { CarouselProducto } from "./CarouselProducto";
import "rc-rate/assets/index.css";

const ProductoScreen = () => {
  return (
    <ContentDetalleProducto>
      <CardProducto>
        <Descuento cel="12px" pc="18px" width="15%">
          30%
        </Descuento>
        <CarouselProducto />
      </CardProducto>
      <ContentInfoProducto>
        <h1>Nombre Producto o medicamento</h1>
        <p>
          La descripción de productos es el elemento vital en un sitio web que
          tiene por objetivo atraer, informar y convencer al consumidor de
          comprar un artículo.{" "}
        </p>
        <span>Antes $35.000</span>
        <ContentButtonsProductos space={true}>
          <ButtonComprar>Ahorra $20.000</ButtonComprar>
          <ButtonCarrito>
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