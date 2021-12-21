import MiniDrawer from "../../../components/Admin/MiniDrawer";
import TableUsuarios from "../../../components/Admin/usuarios/TableUsuarios";

const Usuarios = ({usuarios}) => {
  return ( 
    <>
    <MiniDrawer >
       <TableUsuarios usuarios={usuarios}/>
    </MiniDrawer>
    </>
   );
}
 
export default Usuarios;

export async function getStaticProps(context) {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/usuarios`);
  const data = await resp.json();
  

  return {
    props: { usuarios: data },
  };
}