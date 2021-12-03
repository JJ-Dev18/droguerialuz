import styled   from 'styled-components'
const ContentAlert = styled.div ` 
 width: 100vw;
 height: 100vh;
 background-color: rgba(255,255,255,.5);
 display: flex;
 justify-content: center;
 align-items: center;
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
`

const AccesoDenegado = () => {
  return ( 
    <ContentAlert>
      <h2>Acceso Denegado</h2> 
    </ContentAlert>
   );
}
 
export default AccesoDenegado;