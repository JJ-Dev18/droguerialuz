import { useState , useMemo} from "react";
import FormCategoria from "../../../components/Admin/categorias/FormCategoria";
import TableCategorias from "../../../components/Admin/categorias/TableCategorias";
import CollapsibleTable from "../../../components/Admin/categorias/TableCategoriasCollapse";
import MiniDrawer from "../../../components/Admin/MiniDrawer";
import WithAdminRoute from "../../../components/Auth/WithAdminRoute";

const Categoria = ({categorias}) => {
   
   const categoriasConGrupos = useMemo(() => {
     let array = [];
     let object = new Object();
     for (let index = 0; index < categorias.length  ; index++) {

       if (object["nombre"] != categorias[index].categoria) {
         if (object["nombre"] !== undefined) {
           array.push(object);
           object = {};
         }
         object["idCategoria"] = categorias[index].idCategoria
         object["nombre"] = categorias[index].categoria;
         object["grupos"] = [{ idGrupo : categorias[index].idGrupo, nombre : categorias[index].nombre }];
         if(index == categorias.length - 1 ){
           array.push(object);
           object = {};
         }
       } else {
         object["grupos"].push({
           idGrupo: categorias[index].idGrupo,
           nombre: categorias[index].nombre,
         });
       }
     }
     return array;
   }, [categorias]);

  const [rows, setRows] = useState(categoriasConGrupos)
  const [categoria, setcategoria] = useState({
    nombre : "",
    id: null 
  });
  const [edit, setedit] = useState(false)

  return (
    <>
      <MiniDrawer>
        <FormCategoria
          data={rows}
          setRows={setRows}
          categoria={categoria}
          setcategoria={setcategoria}
          edit={edit}
          setedit={setedit}
        />
        <CollapsibleTable
          rows={rows}
          setRows={setRows}
          setCategoria={setcategoria}
         
          setEdit={setedit}
        />
        {/* {
        state.map( st => <h1> {st.categoria} </h1>)
      } */}
        {/* <TableCategorias rows={rows} setRows={setRows} setcategoria={setcategoria} setedit={setedit}/> */}
      </MiniDrawer>
    </>
  );
}
 
export default Categoria;

export async function getServerSideProps() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/grupos/categorias`
  );
  const data = await resp.json();

  return {
    props: { categorias: data },
  };
}

Categoria.Auth = WithAdminRoute;