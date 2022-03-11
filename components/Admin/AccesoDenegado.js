import styled   from 'styled-components'
import CircularProgress from "@mui/material/CircularProgress";

const ContentAlert = styled.div ` 
 width: 100vw;
 height: 100vh;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 position: absolute;
 z-index : 999999;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
`

const AccesoDenegado = () => {
  return (
    <ContentAlert>
      <CircularProgress color="secondary" />
    </ContentAlert>
  );
}
 
export default AccesoDenegado;