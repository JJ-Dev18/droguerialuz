import MiniDrawer from "../../../components/Admin/MiniDrawer";
import FormUsuario from "../../../components/Admin/usuarios/FormUsuario";

const Usuario = ({data}) => {

  console.log(data)

  return (  
    <>
    <MiniDrawer>
      <FormUsuario data={data[0]} edit={true}/>
    </MiniDrawer>
    </>
   );
}
 
export default Usuario;
export const getStaticPaths = async () => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/usuarios`);
  const data = await resp.json();

  const paths = data.map((producto) => ({
    params: { slug: `${producto.idUsuario}` },
  }));

  return {
    paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ params }) {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/usuarios/${params.slug}`
  );
  const data = await resp.json();
 

  return {
    props: { data  } // will be passed to the page component as props
  };
}
