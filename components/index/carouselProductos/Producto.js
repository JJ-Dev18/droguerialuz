import { ButtonCarrito, ButtonComprar, ContentButtonsProductos, ContentImage, ContentProducto, Descuento, InfoProducto } from "./productoStyles";

const Producto = () => {
  return (
    <ContentProducto>
      <Descuento>30%</Descuento>
      <ContentImage>
        <img
          src="https://www.larebajavirtual.com/images/productos/sii/F/300x300/dolex_gripa-30363-1626291131.png"
          alt="producto imagen"
        />
      </ContentImage>
      <InfoProducto>
        <h1>Acetaminofen</h1>
        <span>Antes $35.000</span>
        <ContentButtonsProductos>
          <ButtonComprar>Ahora $ 20.000</ButtonComprar>
          <ButtonCarrito>
            <img
              src="/index/header/carrito.svg"
              alt="imagen boton carrito"
              width="25px"
            />
          </ButtonCarrito>
        </ContentButtonsProductos>
      </InfoProducto>
    </ContentProducto>
  );
}
 
export default Producto;