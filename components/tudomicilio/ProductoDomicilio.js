

import Counter from "../cart/Counter";
import { ButtonComprar } from "../index/carouselProductos/productoStyles";
import { CantidadProductoCarrito, CardProductoDomicilios, ContentButtonsProductDomicilios, ContentInfoProductDomicilios, Delete, InfoProductoDomicilios } from "./productoStyles";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductoDomicilio = React.memo(({widthCel,
  heightCel,heightPc,widthPc,widthImg,marginleft,h1,p,padding,counter,
  idProducto,nombre,descripcion,price,quantiti,stock,deleteP,add,decrement,img}) => {
 
 
   
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
      <img src={img} alt="producto" />
      
      <Delete onClick={deleteP}>
        <FontAwesomeIcon icon={faTrash} color="#EF1837"></FontAwesomeIcon>
      </Delete>
      <ContentInfoProductDomicilios>
        <InfoProductoDomicilios>
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
        </InfoProductoDomicilios> 
        {counter ? (
          <ContentButtonsProductDomicilios>
            <Counter cantidad={quantiti} add={add}  decrement={decrement} stock={stock}/>

            <ButtonComprar>$ {price}</ButtonComprar>
          </ContentButtonsProductDomicilios>
        )
      :
      <CantidadProductoCarrito>{quantiti}</CantidadProductoCarrito>
      }
      </ContentInfoProductDomicilios>
    </CardProductoDomicilios>
  );
})
 
export default ProductoDomicilio;