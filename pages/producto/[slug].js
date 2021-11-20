import ProductoScreen from "../../components/global/ProductoScreen";
import Carousel from "../../components/index/carousel/Carousel";
import SectionFamilia from "../../components/index/familia/SectionFamilia";
import Publicidad from "../../components/index/publicidad/Publicidad";
import Producto from "../../components/index/carouselProductos/Producto";
import { data } from "../../data/data";

const ProductoDetail = (props) => {

  
  return (
    <>
      <ProductoScreen  {...props}/>
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
          data.productos.map((producto) => (
            <Producto key={producto.id} {...producto} />
          ))
        }
      />
      <SectionFamilia />
    </>
  );
}
 
export default ProductoDetail;

export const getStaticPaths = async () => {

  const paths = data.productos.map( producto => ({
    params : { slug : producto.id}
  }))
  console.log(paths)
  return {
    paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({params}) {
  const producto = data.productos.find( producto => producto.id === params.slug)
  if (!producto) {
    return {
      notFound: true,
    };
  }
  return {
    props: { ...producto }, // will be passed to the page component as props
  };
}