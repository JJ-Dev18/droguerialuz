import { ContentCard, ContentCards, ContentInfo, ContentLogo, ContentQuienes } from "./quienesSomosStyles";

const QuienesSomosSection = () => {
  return (
    <ContentQuienes>
      <ContentLogo>
      <img src="/quienesSomos/logo.svg" alt="logo " />
      </ContentLogo>
      <ContentInfo>
        <h1>Quienes Somos</h1>
        <p>
          Somos una empresa familiar que inicio labores desde 1980 en manos de
          la Sra. Florencia vallejo cuesta que tuvo sus primeros inicios en el
          barrio el ferry que mientras trabajaba en almacenes Robertico vio la
          necesidad de satisfacer una comunidad. por eso comienza incursionando
          en una tienda la cual no obtuvo los resultados que esperaba, salió y
          vendió bolsa de papel las cosas no fueron fácil para esa época poco
          capital, por asesoría da su primer paso en la droguería con armario de
          madera y poca oportunidad de acceso a la información 10 años después
          de consolidarse da paso al crecimiento en el barrio los cedros en 1990
          apertura su segundo punto dando continuidad a su proyecto de vida y
          prestando un servicio idóneo siempre clara con el concepto el cliente
          es lo primero y nuestro sueldo es su satisfacción.
        </p>
      </ContentInfo>
      <ContentCards>
      <ContentCard>
        <h1>Misión</h1>
        <p>
          Somos una empresa Soledeña que comercializa un amplio portafolio de
          productos farmacéuticos y populares buscando siempre llegar a más y
          más hogares.
        </p>
      </ContentCard>
      <ContentCard>
        <h1>Visión </h1>
        <p>
          Ser una de las mejores líneas de farmacias de la zona y para el 2025
          posicionarnos como la primera opción en los hogares Soledeños
        </p>
      </ContentCard>

      </ContentCards>
    </ContentQuienes>
  );
}
 
export default QuienesSomosSection;