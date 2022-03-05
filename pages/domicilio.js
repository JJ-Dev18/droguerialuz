import Layout from "../components/Layout";
import { ContentQuienes } from "../components/quienesSomos/quienesSomosStyles";
import useAppContext from "../context/Store";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import TableDomicilios from "../components/tudomicilio/TableDomicilios";
import { enviarDomicilio } from "../context/actions";
const Domicilio = () => {

   const { value } = useAppContext();
   const { state, dispatch } = value;
   const { cart, logged, user } = state;
   const [estado, setestado] = useState('0')
   const [direccion, setdireccion] = useState('')
    // const [domicilio, setdomicilio] = useState(user.domicilio || {});
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
       });

       if(user.domicilio){
         socket.emit("enviar-domicilio", {...user.domicilio,user});
       }
   }
  // const enviarDomicilios = ()=> {
   
  //   dispatch(
  //     enviarDomicilio({
  //       referencia: 'referenceCode',
  //       total: 30000,
  //       descripcion: 'Descripcion',
  //       direccion : user.direccion == "" ? window.prompt("Por favor poner direccion", user.direccion) : user.direccion,
  //     })
  //   );
  // }
   useEffect(() => {  
     
      conexionDomicilio()
     
   }, [logged])
   
   
  return (
    <ContentQuienes>
      {logged ? 
       user.domicilio ?
        <>
        <h2>Domicilios Activos</h2>
       <TableDomicilios estado={estado} row={user.domicilio}/>
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