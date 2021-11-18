

import Counter from "../cart/Counter";
import { ButtonComprar } from "../index/carouselProductos/productoStyles";
import { CardProductoDomicilios, ContentButtonsProductDomicilios, ContentInfoProductDomicilios, Delete, InfoProductoDomicilios } from "./productoStyles";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductoDomicilio = ({widthCel,heightCel,heightPc,widthPc,widthImg,marginleft,h1,p,padding,counter}) => {

  
  return (
    <CardProductoDomicilios
      widthCel={widthCel}
      heightCel={heightCel}
      widthImg={widthImg}
      widthPc={widthPc}
      heightPc={heightPc}
      marginleft={marginleft}
      h1={h1}
      p={p}
      padding={padding}
    >
      <img src="/producto/3.jpg" alt="producto" />
      {

      }
      <Delete>
        <FontAwesomeIcon icon={faTrash} color="#EF1837"></FontAwesomeIcon>
      </Delete>
      <ContentInfoProductDomicilios>
        <InfoProductoDomicilios>
          <h1>Nombre producto</h1>
          <p>Descripcion de producto</p>
        </InfoProductoDomicilios>
        {counter && (
          <ContentButtonsProductDomicilios>
            <Counter />

            <ButtonComprar>$20.000</ButtonComprar>
          </ContentButtonsProductDomicilios>
        )}
      </ContentInfoProductDomicilios>
    </CardProductoDomicilios>
  );
}
 
export default ProductoDomicilio;