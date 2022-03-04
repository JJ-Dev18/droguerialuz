import WithAdminRoute from "../../../components/Auth/WithAdminRoute";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { ContentQuienes } from "../../../components/quienesSomos/quienesSomosStyles";
import useAppContext from "../../../context/Store";
import MiniDrawer from "../../../components/Admin/MiniDrawer";
import TableDomicilios from "../../../components/Admin/domicilios/TableDomicilios";
const Domicilio = () => {
  const { value } = useAppContext();
  const { state, dispatch } = value;
  const { cart, logged, user } = state;
  const [estado, setestado] = useState("0");
  const [domicilionuevo, setdomicilio] = useState({})
  const [id, setuid] = useState('')
  const [token, settoken] = useState(null)
  const [rows, setRows] = useState([]);
  
  console.log(token)
  const socket = io(process.env.NEXT_PUBLIC_API, {
    extraHeaders: {
      "x-token":token,
    },
  });
  socket.on("connect", () => {
    console.log("Sockets online");
  });
  socket.on("disconnect", () => {
    console.log("Sockets offline");
  });
  socket.on("recibir-domicilio", ({domicilio,uid}) => {
    console.log(uid,domicilio)
    setRows([...rows,{...domicilio,id:uid}])
    setuid(uid);
  });
  
  useEffect(() => {
   settoken(localStorage.getItem("token"))
  }, [])
  
  
  const cambiarEstado = (estado,id) => {

    // socket.emit("enviar-estado", {id,estado});
    socket.emit("enviar-estado", { estado, id });
  };

  return (
    <>
    <MiniDrawer>
    <ContentQuienes>
      
          <h2>Domicilios Activos</h2>
          <TableDomicilios   cambiarestado={cambiarEstado} setestado={setestado} estado={estado} rows={rows} />
      
    
    </ContentQuienes>

    </MiniDrawer>
    </>
  );
};

export default Domicilio;

Domicilio.Auth = WithAdminRoute;
