import { BuscadorInput, ContentBuscador, ContentImagen, ContentInfo, InfoBuscador } from "./buscadorStyles";

const Buscador = () => {
  return (
    <ContentBuscador fondo="/index/buscador/fondo.webp">
      <InfoBuscador>
      <ContentInfo>
        <h2>Busca tus productos y medicamentos que necesites</h2>
        <BuscadorInput type="text" name="Nombre"  placeholder="Busca el nombre del producto o el medicamento" icon="/index/buscador/lupa.svg" />
      </ContentInfo>
      <ContentImagen>
        <img src="/index/buscador/Chica_home.webp" alt="imagen empleada" />
      </ContentImagen>
      </InfoBuscador>
    </ContentBuscador>
  );
}
 
export default Buscador;