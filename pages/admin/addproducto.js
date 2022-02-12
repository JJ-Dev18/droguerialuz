import MiniDrawer from "../../components/Admin/MiniDrawer";
import FormProducto from "../../components/Admin/productos/FormProducto";

const AddProducto = ({grupos}) => {
  return (
    <>
      <MiniDrawer>
        <FormProducto grupos={grupos} />     
      </MiniDrawer>
    </>
  );
}
 
export default AddProducto;

export async function getServerSideProps() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/grupos`);
  const data = await resp.json();

  return {
    props: { grupos: data },
  };
}