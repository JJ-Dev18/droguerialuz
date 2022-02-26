import MiniDrawer from "../../components/Admin/MiniDrawer";
import FormUsuario from "../../components/Admin/usuarios/FormUsuario";
import WithAdminRoute from "../../components/Auth/WithAdminRoute";

const AddUsuario = () => {
  return ( 
    <>
    <MiniDrawer>
      <FormUsuario />
    </MiniDrawer>
    </>
   );
}
 
export default AddUsuario;

AddUsuario.Auth = WithAdminRoute;