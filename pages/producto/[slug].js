import ProductoScreen from "../../components/global/ProductoScreen";
import Carousel from "../../components/index/carousel/Carousel";
import SectionFamilia from "../../components/index/familia/SectionFamilia";
import Publicidad from "../../components/index/publicidad/Publicidad";
import Producto from "../../components/index/carouselProductos/Producto";
import Layout from "../../components/Layout";
// import { data } from "../../data/data";

const ProductoDetail = ({data,dataRelacionados}) => {
  
  
  return (
    <>
      <ProductoScreen {...data} />
      <Publicidad />
      <h1 className="title_home">Productos Relacionados</h1>
      <Carousel
        color="#EF1837"
        pcBig={2}
        pc={4}
        tablet={3}
        tel={2}
        dots={false}
        dctos={true}
        onDctos={() =>
          dataRelacionados.map((producto) => (
            <Producto key={producto.idProducto} {...producto} />
          ))
        }
      />
      <h1 className="title_home">Familia Luz Mar</h1>
      <SectionFamilia />
    </>
  );
}
 
export default ProductoDetail;
ProductoDetail.Layout = Layout
export const getStaticPaths = async () => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`)
  const data = await  resp.json()
 
  const paths = data.map( producto => ({
    params : { slug : `${producto.idProducto}`}
  }))
  
  return {
    paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({params}) {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products/${params.slug}`)
  const data = await resp.json()
  const {Grupo_idGrupo } = data;

  const respRelacionados = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products/grupo/${Grupo_idGrupo}`);
  const dataRelacionados = await respRelacionados.json()
  let hash = {};
  let productos = dataRelacionados.filter(function (current) {
    let exists = !hash[current.idProducto];
    hash[current.idProducto] = true;
    return exists;
  });
  return {
    props: { data, dataRelacionados : productos}, // will be passed to the page component as props
    revalidate : 1
  };
}