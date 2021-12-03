// import { useContext } from "react";
// import { Store } from "../../context/Store";
import { useRouter } from "next/router";
import React, { useContext,useState,useEffect } from "react";
import useAppContext, { Store } from "../../context/Store";
import { ButtonComprar } from "../index/carouselProductos/productoStyles";
import ProductoDomicilio from "../tudomicilio/ProductoDomicilio";
import { ContainCard, ContentButtonComprar } from "./productoCartStyles";

export default function ContentCard  (props){
  const router = useRouter()
  return (
    <ContainCard>
      {props.productos.length === 0 && (
        <h4 style={{ color: "red" }}>No hay productos en el carrito</h4>
      )}

      {props.productos.map((producto) => (
        <ProductoDomicilio
          key={producto.id}
          widthCel="200px"
          heightCel="100px"
          widthImg="50px"
          widthPc="100%"
          heightPc="100px"
          marginleft={false}
          img={producto.images ? producto.images[0].img : producto.img}
          h1="15px"
          p="12px"
          deleteP={props.deleteP}
          padding={false}
          {...producto}
        />
      ))}

      <ContentButtonComprar>
        <span> Total : {props.total}</span>
        <ButtonComprar onClick={() => router.push("/misproductos")}>
          Ver Carro
        </ButtonComprar>
      </ContentButtonComprar>
    </ContainCard>
  );
}
 
