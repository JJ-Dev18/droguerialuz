import Head from "next/head";
import {useAlert} from 'react-alert'
import ProductoDomicilio from "../components/tudomicilio/ProductoDomicilio";
import { ContentTitulo, TituloProducto } from "../components/tudomicilio/productoStyles";
import Publicidad from "../components/index/publicidad/Publicidad";
import SectionFamilia from "../components/index/familia/SectionFamilia";
import useAppContext from "../context/Store";
import {  cartDelete, decrementProduct, incrementProduct } from "../context/actions";
import { useCallback } from "react";
import { ButtonComprar } from "../components/index/carouselProductos/productoStyles";
import Layout from "../components/Layout";

export default function MisProductos() {
  const alert = useAlert()
  const { value } = useAppContext()
  const { state , dispatch } = value;
  const { cart } = state
  
  const deleteP = useCallback((props) => {
      dispatch(cartDelete(props));
      alert.error("Producto eliminado del carrito");
    },
    [alert,dispatch],
  )
   const incrementProd =   useCallback((idProducto) => {
         dispatch(incrementProduct(idProducto));
       },
       [dispatch],
     )
  
  const decrementProd = useCallback((idProducto) => {
    dispatch(decrementProduct(idProducto));
  }, [dispatch]);
  
  
  return (
    <>
      <Head>
        <title>Luz Mar - Droguerias</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentTitulo>
      <TituloProducto>Tus Productos </TituloProducto>
      <ButtonComprar>Comprar</ButtonComprar>
      </ContentTitulo>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cart.cartItems.length === 0 ? (
          <h1> No hay productos en su domicilio </h1>
        ) : (
          cart.cartItems.map((item) => (
            <ProductoDomicilio
              key={item.idProducto}
              deleteP={()=>deleteP(item.idProducto)}
              add={()=> incrementProd(item.idProducto)}
              decrement={()=> decrementProd(item.idProducto)}
              widthCel="370px"
              heightCel="150px"
              widthImg="120px"
              widthPc="400px"
              heightPc="220px"
              marginleft={true}
              counter={true}
              img={(item.images)? item.images[0].img :item.img}
              {...item}
            />
          ))
        )}

       
      </div>
      <Publicidad />
      <SectionFamilia />
    </>
  );
}

MisProductos.Layout = Layout;