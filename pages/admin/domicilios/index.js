import WithAdminRoute from "../../../components/Auth/WithAdminRoute";
import { io } from "socket.io-client";
import { forwardRef, useEffect, useState } from "react";
import { ContentQuienes } from "../../../components/quienesSomos/quienesSomosStyles";
import useAppContext from "../../../context/Store";
import MiniDrawer from "../../../components/Admin/MiniDrawer";
import TableDomicilios from "../../../components/Admin/domicilios/TableDomicilios";
import { useSocket } from "../../../hooks/useSocket";
import useSound from "use-sound";
import { useAlert } from "react-alert";


const Domicilio = () => {
  const { value } = useAppContext();
  const { state, dispatch } = value;
  const { cart, logged, user } = state;
  const [estado, setestado] = useState("0");
  
  const [logeado, setlogeado] = useState(logged)
  const [token, settoken] = useState(null)
  const { socket, online } = useSocket(process.env.NEXT_PUBLIC_API,logeado,token);
  const [rows, setRows] = useState([]);
  const [play] = useSound('/alert.mp3');
  const alert = useAlert()
 
  console.log("renderizado")
  
  useEffect(() => {
   settoken(localStorage.getItem("token"))
   setlogeado(true)
  }, [logged])

   useEffect(() => {
     socket.on("current-domicilios", (domicilios) => {

      
      //  console.log('domicilios',domicilios.length)
       setRows(domicilios);
       
      //  if (domicilios.length > rows.length) {
      //    alert.success("Nuevo domicilio");
      //    play();
      //  }
     });
    //  return () => socket.off("current-domicilios");
   }, [socket,token]);
 
  useEffect(() => {
    socket.on("nuevo-domicilio",(nuevo)=>{
      alert.success("Nuevo domicilio");
      play('asdfasd');
    })
  
  
  }, [socket])
  
  
  
  
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
