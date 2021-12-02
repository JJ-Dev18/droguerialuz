import { useState } from 'react'
import styled from 'styled-components'
const ContentBusqueda = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  form{
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 1100px) {
   
    width: 1100px;
  }
`;
const InputBusqueda = styled.input`
  width: 85%;
  height: 60%;
  background: url(${(props) => props.icon}) no-repeat;
  background-color: white;
  background-size: 25px;
  background-position: 10px 10px;
  text-align: center;
  &:focus {
    outline: none;
  }
  
`;

const Busqueda = ({data,setData}) => {
  const [busqueda, setBusqueda] = useState('')
  const handleChange = ({target})=>{
    
    if (target.value != "") {
      const newData = data.filter((prod) => prod.nombre.toLocaleLowerCase().includes(target.value));
      setData(newData);
    }
    else{
      setData(data)
    }
    setBusqueda(target.value)
  }
  const searchSubmit = (e) =>{
  e.preventDefault()
  }
  
  return (
    <ContentBusqueda>
      <form onSubmit={searchSubmit}>
      <InputBusqueda
        placeholder="Busqueda por nombre"
        type="text"
        name="busqueda"
        value={busqueda}
        icon="/index/buscador/lupa.svg"
        onChange={handleChange}
      />

      </form>
    </ContentBusqueda>
  );
}
 
export default Busqueda;