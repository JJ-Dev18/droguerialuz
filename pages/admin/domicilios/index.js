import WithAdminRoute from "../../../components/Auth/WithAdminRoute";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { ContentQuienes } from "../../../components/quienesSomos/quienesSomosStyles";
import useAppContext from "../../../context/Store";
import MiniDrawer from "../../../components/Admin/MiniDrawer";
import TableDomicilios from "../../../components/Admin/domicilios/TableDomicilios";
import { useSocket } from "../../../hooks/useSocket";

const Domicilio = () => {
  const { value } = useAppContext();
  const { state, dispatch } = value;
  const { cart, logged, user } = state;
  const [estado, setestado] = useState("0");
  const [domicilionuevo, setdomicilio] = useState({})
  const [id, setuid] = useState('')
  const [logeado, setlogeado] = useState(logged)
  const [token, settoken] = useState(null)
  const { socket, online } = useSocket(process.env.NEXT_PUBLIC_API,logeado,token);
  const [rows, setRows] = useState([]);
  
  console.log("renderizado")
  
  useEffect(() => {
   settoken(localStorage.getItem("token"))
   setlogeado(true)
  }, [logged])

   useEffect(() => {
     socket.on("current-domicilios", (domicilios) => {
      //  domicilios.map( dom => {
      //    socket.emit("enviar-domicilios-cliente", dom.idUsuario);
      //  })
       setRows(domicilios);
      //  console.log(rows)
     });
    //  return () => socket.off("current-domicilios");
   }, [socket,token]);
  // useEffect(() => {
  //   socket.emit("current-domicilios-cliente", );
  
    
  // }, [socket])
  
  
  
  
  const cambiarEstado = (estado,id,idUsuario) => {

    socket.emit("enviar-estado", { estado, idUsuario,id });
  };

  return (
    <>
      <MiniDrawer>
        <ContentQuienes>
          <h4>{online ? "Online" : "offline"}</h4>
          <h2>Domicilios Activos</h2>
          <TableDomicilios
            cambiarestado={cambiarEstado}
            setestado={setestado}
            estado={estado}
            rows={rows}
          />
        </ContentQuienes>
      </MiniDrawer>
    </>
  );
};

export default Domicilio;

Domicilio.Auth = WithAdminRoute;
