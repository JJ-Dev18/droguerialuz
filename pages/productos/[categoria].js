import Producto from "../../components/index/carouselProductos/Producto";
import styled from 'styled-components'
import Busqueda from "../../components/global/Busqueda";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

const ContentProductosCategoria = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 40px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 375px;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 800px;
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 1100px;
  }
`;

const ContainerCategoria = styled.div ` 
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
`
const ProductosCategoria = (props) => {
  const [data, setData] = useState(props.data)

   useEffect(() => {
     setData(props.data)
   }, [props.data,setData])

  return (
    <ContainerCategoria>
      <Busqueda data={props.data} setData={setData}/>
    <ContentProductosCategoria>
      {data.map((producto) => (
        <Producto {...producto} key={producto.idProducto}/>
      ))}
    </ContentProductosCategoria>
    </ContainerCategoria>
  );
}
 
export default ProductosCategoria;
ProductosCategoria.Layout = Layout

export const getStaticPaths = async () => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/grupos`)
  const data = await resp.json()
 
  const paths = data.map((grupo)=> ({
    params : { categoria : `${grupo.idGrupo}` }
  }))
 
  return {
    paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ params }) {

  const resp = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products/grupo/${params.categoria}`)
  const data = await resp.json()
  let hash ={}
  let productos = data.filter(function (current) {
     let exists = !hash[current.idProducto];
     hash[current.idProducto] = true;
     return exists;
   });
  return {
    props: { data : productos}, // will be passed to the page component as props
  };
}