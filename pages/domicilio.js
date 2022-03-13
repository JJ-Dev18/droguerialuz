import Layout from "../components/Layout";
import { ContentQuienes } from "../components/quienesSomos/quienesSomosStyles";
import useAppContext from "../context/Store";
import { useEffect, useState } from "react";
import TableDomicilios from "../components/tudomicilio/TableDomicilios";
import { enviarDomicilio } from "../context/actions";
import { useSocket } from "../hooks/useSocket";
import useSound from "use-sound";
import { useAlert } from "react-alert";


const Domicilio = () => {

   const { value } = useAppContext();
   const { state, dispatch } = value;
   const { cart, logged, user, domicilio } = state;
   const [estado, setestado] = useState('0')
   const [token, settoken] = useState(null)
   const { socket, online } = useSocket(process.env.NEXT_PUBLIC_API,logged,token);
   const [rows, setrows] = useState([])
    const [play] = useSound("/alert.mp3");
    const alert = useAlert();
   
    const cambiarEstado = (estado = "0") => {
        setestado(estado)
    };
    //  console.log(rows)
    useEffect(() => {
      settoken(localStorage.getItem("token"));
    }, [logged]);
   console.log(user)
  
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
         if(estado == 1){
           alert.success("Empacando");

         }
         if (estado == 2) {
           alert.success("En camino");

         }
         if (estado == 3) {
           alert.success('Entregado');
         }
         play();
         setestado(estado);

       });
      
   }, [socket]);
 

    useEffect(() => {
      if (token) {
        socket.on("current-domicilios", (domicilios) => {
          let domiciliosCliente = domicilios.filter(
            (dom) => dom.idUsuario == user.id
          );
          console.log(domicilios)
          setrows(domiciliosCliente);
        });
      }
    }, [socket,token,user]);

    useEffect(() => {

      if(domicilio){
         socket.emit("crear-domicilio", {...domicilio,idUsuario: user.id});
       }
      
    }, [socket,domicilio,online]);
  
  
   
  return (
    <ContentQuienes>
      <p>{ online ? 'Online' : 'offline'}</p>
      <button onClick={enviarDomicilios}>enviar </button>
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