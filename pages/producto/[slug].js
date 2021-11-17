import ProductoScreen from "../../components/global/ProductoScreen";
import Carousel from "../../components/index/carousel/Carousel";
import SectionFamilia from "../../components/index/familia/SectionFamilia";
import Publicidad from "../../components/index/publicidad/Publicidad";
import Producto from "../../components/index/carouselProductos/Producto";

const ProductoDetail = () => {
  return (
    <>
      <ProductoScreen />
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
        onDctos={() => <Producto />}
      />
      <SectionFamilia />
    </>
  );
}
 
export default ProductoDetail;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "campera" } }], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ locale }) {

  return {
    props : {

    }
  }
}