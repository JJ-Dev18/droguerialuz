import Link from "next/link";
import { NavLink } from "../header/NavLink";
import {
  Beneficio,
  Beneficios,
  ContentBeneficios,
  ContentFooter,
  ContentInfoFooter,
  Copyrigth,
  GridInfo,
  Info,
  InfoBeneficio,
  LogoFooter,
  Mapa,
  Titulo,
} from "./footerStyled";

const Footer = () => {
  return (
    <ContentFooter>
      <ContentBeneficios>
        <Titulo>
          <h1>Nuestros Beneficios</h1>
        </Titulo>
        <Beneficios>
          <Beneficio>
            <img src="/index/footer/delivery.svg" alt="imagen delivery" />
            <InfoBeneficio>Domicilio Gratis</InfoBeneficio>
          </Beneficio>
          <Beneficio>
            <img src="/index/footer/insurance.svg" alt="imagen insurance" />
            <InfoBeneficio>Rapidez y Cuidado</InfoBeneficio>
          </Beneficio>
          <Beneficio>
            <img src="/index/footer/logistic.svg" alt="imagen logistica" />
            <InfoBeneficio>Excelente Servicio</InfoBeneficio>
          </Beneficio>
          <Beneficio>
            <img src="/index/footer/money-back.svg" alt="imagen dinero back" />
            <InfoBeneficio>Precios economicos</InfoBeneficio>
          </Beneficio>
        </Beneficios>
      </ContentBeneficios>
      <ContentInfoFooter>
        <GridInfo>
          <LogoFooter>
            <img src="/index/footer/Logo_Footer.svg" alt="logo" />
          </LogoFooter>
          <Mapa>
            <img src="/index/footer/Mapa.svg" alt="Mapa" />
          </Mapa>
          <Info>
            <h1>Información de interés</h1>
            <span>Estilo de vida saludable</span>
            <span>Catalogo promocional</span>
            <span> Tu opinión </span>
          </Info>
          <Info>
            <h1>Contáctanos</h1>
            <span>Email : gerencia_luzmar@hotmail.com</span>
            <span>Teléfono : 3161023 - 3008896322</span>
            <span>Direccion: Cll 74 #18-05, Soledad</span>
          </Info>
          <Info>
            <h1>Luz Mar Droguerias</h1>
            <span>
              <Link href="/quienesSomos">¿Quiénes somos? </Link>
            </span>
            <span>
              <Link href="/aliados">Nuestros Aliados</Link>
            </span>
          </Info>
        </GridInfo>
        <Copyrigth>
          Todos los derechos reservados <br /> Copyright © 2021 – Advanced
          Marketing SAS
        </Copyrigth>
      </ContentInfoFooter>
    </ContentFooter>
  );
};

export default Footer;
