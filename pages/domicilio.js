import Layout from "../components/Layout";
import { ContentQuienes } from "../components/quienesSomos/quienesSomosStyles";
import useAppContext from "../context/Store";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import TableDomicilios from "../components/tudomicilio/TableDomicilios";
import { enviarDomicilio } from "../context/actions";
import { useSocket } from "../hooks/useSocket";

const connectSocketServer = () => {
   const socket = io.connect(process.env.NEXT_PUBLIC_API, {
     transports: ["websocket"],
     query: {
       "x-token": localStorage.getItem("token"),
     },
   
   });
 return socket;
 
}

const Domicilio = () => {

   const { value } = useAppContext();
   const { state, dispatch } = value;
   const { cart, logged, user, domicilio } = state;
   const [estado, setestado] = useState('0')
   const [token, settoken] = useState(null)
  //  const [socket ] = useState(connectSocketServer())
   const { socket, online } = useSocket(process.env.NEXT_PUBLIC_API,logged,token);
   const [rows, setrows] = useState([])
   const [direccion, setdireccion] = useState('')
    // const [domicilio, setdomicilio] = useState(user.domicilio || {});
    const cambiarEstado = (estado = "0") => {
        setestado(estado)
    };
    //  console.log(rows)
    useEffect(() => {
      settoken(localStorage.getItem("token"));
    }, [logged]);
  
    // useEffect(() => {
    //   settoken(localStorage.getItem("token"));
    // }, []);

    // useEffect(() => {
    //   setonline( socket.connected )
    //    return () => {
    //      socket.disconnect();
    //    };
    // }, [socket]);

    //  useEffect(() => {
    //    socket.on("connect", () => {
    //      setonline(true)
    //      console.log("Sockets online");
    //   });
    //  }, [socket]);

    //   useEffect(() => {
    //   socket.on("disconnect", () => {
    //     setonline(false)
    //      console.log("Sockets offline");
    //    });
    //   }, [socket]);
  //  const conexionDomicilio = () =>{

  //     const socket = io(process.env.NEXT_PUBLIC_API, {
  //       extraHeaders: {
  //         "x-token": localStorage.getItem("token"),
  //       },
  //     });
  //     socket.on("connect", () => {
  //       console.log("Sockets online");
  //     });
  //      socket.on("disconnect", () => {
  //        console.log("Sockets offline");
  //      });
  //      socket.on("recibir-estado", ({estado})=>{
  //        setestado(estado);
  //      });

  //      if(user.domicilio){
  //        socket.emit("enviar-domicilio", {...user.domicilio,user});
  //      }
  //  }
  const enviarDomicilios = ()=> {
   
    dispatch(
      enviarDomicilio({
        referencia: 'referenceCode',
        total: 30000,
        descripcion: 'Descripcion s',
        direccion : user.direccion == "" ? window.prompt("Por favor poner direccion", user.direccion) : user.direccion,
      })
    );
  }
   useEffect(() => {
      socket.on("recibir-estado", ({estado})=>{
        
         setestado(estado);
       });
      
   }, [socket]);
   useEffect(() => {
     if(logged){
       socket.on("current-domicilios", (domicilios) => {
         let domiciliosCliente = domicilios.filter(dom => dom.idUsuario == user.id)
         setrows(domiciliosCliente)
       });
     }
   }, [socket]);

    useEffect(() => {

      if(domicilio){
         socket.emit("crear-domicilio", {...domicilio,idUsuario: user.id});
       }
      
    }, [socket,domicilio,online]);
  
  
   
  return (
    <ContentQuienes>
      <p>{ online ? 'Online' : 'offline'}</p>
      {/* <button onClick={enviarDomicilios}>enviar </button> */}
      {logged ? 
       rows.length != 0 ?
        <>
        <h2>Domicilios Activos</h2>
       <TableDomicilios estado={estado} data={rows}/>
        </>
       : <>
         <h3 >No hay domicilios activos</h3>
       </>
       :
        <h3>Debe Iniciar Sesion para comprar</h3>
      }
    </ContentQuienes>
  );
}
 
export default Domicilio;

Domicilio.Layout = Layout