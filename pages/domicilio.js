import Layout from "../components/Layout";
import { ContentQuienes } from "../components/quienesSomos/quienesSomosStyles";
import useAppContext from "../context/Store";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import TableDomicilios from "../components/tudomicilio/TableDomicilios";
const Domicilio = () => {

   const { value } = useAppContext();
   const { state, dispatch } = value;
   const { cart, logged, user } = state;
   const [estado, setestado] = useState('0')
    const [domicilio, setdomicilio] = useState({
      referencia: "Prueba",
      total: 20000,
      descripcion: "Probando socketrs",
      direccion: "Calle 103 # 4c -12 ",
    });
    const cambiarEstado = (estado = "0") => {
        setestado(estado)
    };

   const conexionDomicilio = () =>{
      const socket = io(process.env.NEXT_PUBLIC_API, {
        extraHeaders: {
          "x-token": localStorage.getItem("token"),
        },
      });
      socket.on("connect", () => {
        console.log("Sockets online");
      });
       socket.on("disconnect", () => {
         console.log("Sockets offline");
       });
       socket.on("recibir-estado", ({estado})=>{
         setestado(estado);
         console.log(estado)
       });

       if(domicilio){
         socket.emit("enviar-domicilio", {domicilio,user});
       }
   }
  
  
   useEffect(() => {  
     
      conexionDomicilio()
     
   }, [logged])
   useEffect(() => {
     
   }, [])
   
  return (
    <ContentQuienes>
      {logged ? (
        <>
        <h2>Domicilios Activos</h2>
       <TableDomicilios estado={estado} row={domicilio}/>
        </>
   
      ) : (
        <h3>Debe Iniciar Sesion para comprar</h3>
      )}
    </ContentQuienes>
  );
}
 
export default Domicilio;

Domicilio.Layout = Layout