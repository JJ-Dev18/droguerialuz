import TableCompras from "../../../components/Admin/compras/TableCompras";
import MiniDrawer from "../../../components/Admin/MiniDrawer";

const Compras = ({compras}) => {
  return ( 
    <>
    <MiniDrawer>
      <TableCompras compras={compras}/>
    </MiniDrawer>
    </>
   );
}
 
export default Compras;
export async function getServerSideProps(context) {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/compras`);
  const data = await resp.json();

  return {
    props: { compras: data },
  };
}