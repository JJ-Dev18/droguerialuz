import Head from 'next/head'
import Image from 'next/image'
import { CarouselProducto } from '../components/global/CarouselProducto'
import Buscador from '../components/index/buscador/Buscador'
import Carousel from '../components/index/carousel/Carousel'
import CarouselBanner from '../components/index/carousel/CarouselBanner'
import { ContentCarouselBaner } from '../components/index/carousel/carouselStyles'
import Producto from '../components/index/carouselProductos/Producto'
import SectionFamilia from '../components/index/familia/SectionFamilia'
import Publicidad from '../components/index/publicidad/Publicidad'
import styles from '../styles/Home.module.css'
// import {data} from '../data/data'
import { useEffect } from 'react'


export default function Home ({data}) {

  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Head>
        <title>Luz Mar - Droguerias</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Buscador />
      <Carousel
        pcBig={1}
        tablet={1}
        pc={1}
        tel={1}
        banner={true}
        dots={true}
        onBanner={() => <CarouselBanner />}
      />
      <Publicidad />
      <h1 className="title_home">Super Descuentos</h1>
      <Carousel
        color="#EF1837"
        pcBig={5}
        pc={4}
        tablet={3}
        tel={2}
        dots={false}
        dctos={true}
        onDctos={() =>
          data.map((producto) => (
            <Producto key={producto.idProducto} {...producto} />
          ))
        }
      />
      <h1 className="title_home">Ofertas</h1>
      <Carousel
        color="#EF1837"
        pcBig={4}
        pc={4}
        tablet={3}
        tel={2}
        dots={false}
        offer={true}
        onOffer={() =>
          data
            .map((prod) => {
              if(prod.descuento > 0 )
              return <Producto key={prod.idProducto} {...prod} />;
            })
        }
      />
      <ContentCarouselBaner style={{ marginTop: "20px" }}>
        <img src="/index/baner.png" alt="baner publicidad" />
      </ContentCarouselBaner>
      <h1 className="title_home">Tu hogar</h1>
      <Carousel
        color="#EF1837"
        pcBig={5}
        pc={4}
        tablet={3}
        tel={2}
        dots={false}
        home={true}
        onHome={() =>
          data.map((producto) => (
            <Producto key={producto.idProducto} {...producto} />
          ))
        }
      />

      <h1 className="title_home">Familia Luz Mar</h1>
      <SectionFamilia />
    </div>
  );
}

export async function getStaticProps(context) {
   
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`)
  const data = await resp.json()

  
  
  return {
    props: {data}, // will be passed to the page component as props
  };
}