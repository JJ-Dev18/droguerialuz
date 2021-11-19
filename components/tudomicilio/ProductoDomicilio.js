

import Counter from "../cart/Counter";
import { ButtonComprar } from "../index/carouselProductos/productoStyles";
import { CantidadProductoCarrito, CardProductoDomicilios, ContentButtonsProductDomicilios, ContentInfoProductDomicilios, Delete, InfoProductoDomicilios } from "./productoStyles";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductoDomicilio = ({widthCel,heightCel,heightPc,widthPc,widthImg,marginleft,h1,p,padding,counter,id,nombre,descripcion,price,quantiti,deleteP}) => {

   
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
      <Delete onClick={()=> deleteP({id,nombre,descripcion,price})}>
        <FontAwesomeIcon icon={faTrash} color="#EF1837"></FontAwesomeIcon>
      </Delete>
      <ContentInfoProductDomicilios>
        <InfoProductoDomicilios>
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
        </InfoProductoDomicilios>
        {counter ? (
          <ContentButtonsProductDomicilios>
            <Counter cantidad={quantiti} />

            <ButtonComprar>$20.000</ButtonComprar>
          </ContentButtonsProductDomicilios>
        )
      :
      <CantidadProductoCarrito>{quantiti}</CantidadProductoCarrito>
      }
      </ContentInfoProductDomicilios>
    </CardProductoDomicilios>
  );
}
 
export default ProductoDomicilio;