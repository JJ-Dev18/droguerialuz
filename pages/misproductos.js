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
import md5 from 'md5'

export default function MisProductos() {
  const alert = useAlert()
  const { value } = useAppContext()
  const { state , dispatch } = value;
  const { cart,total } = state
  console.log(state)
  const apikey = "xdweeL4F4Trn2v04kPZ0u7LDv7";
  const merchanId = "962458";
  const accountId = "970217";
  const referencia = 'dolex pro'
  const monto = '12000';
  const signature = md5(`${apikey}~${merchanId}~${referencia}~${monto}~COP`);
  const urlTest ="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/";
  const urlProd = "https://checkout.payulatam.com/ppp-web-gateway-payu/";
  console.log(apikey,merchanId,signature)
  // const signature = brypt
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
  const enviarDatos = ()=>{
    fetch("https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/",{
      method: 'POST'
    });
  }
  
  return (
    <>
      <Head>
        <title>Luz Mar - Droguerias</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentTitulo>
        <TituloProducto>Tus Productos </TituloProducto>
        <h2>Total : {cart.total}</h2>

        <form method="post" action={urlProd}>
          <input name="merchantId" type="hidden" value={merchanId} />
          <input name="accountId" type="hidden" value={accountId} />
          <input name="description" type="hidden" value="Test PAYU" />
          <input name="referenceCode" type="hidden" value={referencia} />
          <input name="amount" type="hidden" value={monto} />
          <input name="tax" type="hidden" value="0" />
          <input name="taxReturnBase" type="hidden" value="0" />
          <input name="currency" type="hidden" value="COP" />
          <input name="sourceUrl" type="hidden" value="http//localhost:3000/" />
          <input name="signature" type="hidden" value={signature} />
          <input name="test" type="hidden" value="1" />
          
          <input
            name="buyerEmail"
            type="hidden"
            value="juanjomb1_vi@hotmail.com"
          />
          <input
            name="responseUrl"
            type="hidden"
            value="http://www.test.com/response"
          />
          <input
            name="confirmationUrl"
            type="hidden"
            value="http://www.test.com/confirmation"
          />
          {/* <input name="Submit" type="submit" value="Enviar" /> */}
          <ButtonComprar name="Submit" type="submit" value="Enviar">
            Comprar
          </ButtonComprar>
        </form>
      </ContentTitulo>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cart.cartItems.length === 0 ? (
          <h1> No hay productos en su domicilio </h1>
        ) : (
          cart.cartItems.map((item) => (
            <ProductoDomicilio
              key={item.idProducto}
              deleteP={() => deleteP(item.idProducto)}
              add={() => incrementProd(item.idProducto)}
              decrement={() => decrementProd(item.idProducto)}
              widthCel="370px"
              heightCel="150px"
              widthImg="120px"
              widthPc="400px"
              heightPc="220px"
              marginleft={true}
              counter={true}
              img={item.images ? item.images[0].img : item.img}
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