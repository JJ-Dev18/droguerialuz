import { BuscadorInput, ContentBuscador, ContentImagen, ContentInfo, InfoBuscador } from "./buscadorStyles";

const Buscador = () => {
  return (
    <ContentBuscador fondo="/index/buscador/fondo.png">
      <InfoBuscador>
      <ContentInfo>
        <h2>Busca tus productos y medicamentos que necesites</h2>
        <BuscadorInput type="text" name="Nombre"  placeholder="Busca el nombre del producto o el medicamento" />
      </ContentInfo>
      <ContentImagen>
        <img src="/index/buscador/Chica_home.png" alt="imagen empleada" />
      </ContentImagen>
      </InfoBuscador>
    </ContentBuscador>
  );
}
 
export default Buscador;