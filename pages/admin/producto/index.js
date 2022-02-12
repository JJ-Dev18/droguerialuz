import Head from 'next/head'
import MiniDrawer from "../../../components/Admin/MiniDrawer";
import TableProducto from "../../../components/Admin/productos/TableProducto";

const Productos = ({productos}) => {
  
  return (
    <>
    <Head>
      <title>Administrador - Productos</title>
    </Head>
    <MiniDrawer>
      <TableProducto productos={productos} />
    </MiniDrawer>
    </>
  );
};

export default Productos;

export async function getServerSideProps() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`);
  const data = await resp.json();

  return {
    props: { productos: data },
  };
}
