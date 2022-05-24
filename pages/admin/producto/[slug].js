import { useState } from "react";
import MiniDrawer from "../../../components/Admin/MiniDrawer";
import FormProducto from "../../../components/Admin/productos/FormProducto";
import ProductoScreen from "../../../components/global/ProductoScreen";
import WithAdminRoute from "../../../components/Auth/WithAdminRoute";

const ProductoDetail = ({data,grupos}) => {
  const [dataProducto, setdataProducto] = useState(data)
  return (
    <>
      <MiniDrawer>
        <h2>Detalle del Producto</h2>
        <ProductoScreen {...dataProducto} />
        <FormProducto data={data} grupos={grupos} edit={true}  setdataProducto={setdataProducto} />
      </MiniDrawer>
    </>
  );
}
 
export default ProductoDetail;

export const getStaticPaths = async () => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`);
  const data = await resp.json();

  const paths = data.map((producto) => ({
    params: { slug: `${producto.idProducto}` },
  }));

  return {
    paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ params }) {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/products/${params.slug}`
  );
  const data = await resp.json();
  const respGrupos = await fetch(`${process.env.NEXT_PUBLIC_API}/api/grupos`);
  const grupos  = await respGrupos.json();

  
  return {
    props: { data, grupos },
    revalidate: 1, // will be passed to the page component as props
  };
}

ProductoDetail.Auth = WithAdminRoute;