// import { useContext } from "react";
// import { Store } from "../../context/Store";
import React, { useContext,useState,useEffect } from "react";
import useAppContext, { Store } from "../../context/Store";
import ProductoDomicilio from "../tudomicilio/ProductoDomicilio";
import ProductoCart from "./ProductoCart";
import { ContainCard } from "./productoCartStyles";

const ContentCard = React.memo((props) => {

   
  //  const [productos, setProductos] = useState([])

  
   

   console.log(props.productos)
   
  return (
    <ContainCard>
      {props.productos.length === 0 ? (
        function(){
          return (
            <h4 style={{ color: "red" }}>No hay productos en el carrito</h4>
          );
        }
       
      ) : (
        props.productos.map((producto) => (
          <ProductoDomicilio
            key={producto.id}
            widthCel="100px"
            heightCel="100px"
            widthImg="50px"
            widthPc="100%"
            heightPc="100px"
            marginleft={false}
            h1="15px"
            p="12px"
            deleteP={props.deleteP}
            padding={false}
            {...producto}
          />
        ))
      )}
   
    </ContainCard>
  );
})
 
export default ContentCard;