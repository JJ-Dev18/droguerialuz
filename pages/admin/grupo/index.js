import MiniDrawer from "../../../components/Admin/MiniDrawer";

const Grupos = (props) => {
  console.log(props)
  return ( 
    <>
    <MiniDrawer>
      <p>Grupos </p>
    </MiniDrawer>
    </>
   );
}
 
export default Grupos;


export async function getStaticProps() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/categorias`);
  const data = await resp.json();
  const respGrupos = await fetch(`${process.env.NEXT_PUBLIC_API}/api/grupos`);
  const dataGrupos = await respGrupos.json();

  return {
    props: { categorias: data , grupos : dataGrupos},
  };
  return {
    props: { categorias: data },
  };
}