import React , {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {  faWindowClose } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { ButtonCerrar, ButtonHamburguesa, ButtonsHeader, ContentButtons, ContentHeader, ContentPregunta, Enlaces, HeaderPrincipal, ListLinks, Logo, Navigator } from "./headerStyles";

const Header = () => {

  const [open, setopen] = useState(false)
  return (
    <ContentHeader>
      <ContentPregunta>
        <p>PREGUNTA POR NUESTRAS MEJORES PROMOCIONES</p>
      </ContentPregunta>
      <HeaderPrincipal>
        <Logo src="/index/header/logo.svg" alt="logo drogueria" />
        <ListLinks open={open}>
          <Enlaces>
            <Link href="/ingresar">Ingresar</Link>
          </Enlaces>
          <Enlaces>
            <Link href="/registrate">Registrate</Link>
          </Enlaces>
          <ContentButtons>
            <ButtonsHeader>
              <img
                src="/index/header/user.svg"
                alt="imagen boton usario"
                width="20px"
              />
            </ButtonsHeader>
            <ButtonsHeader>
              <img
                src="/index/header/carrito.svg"
                alt="imagen boton carrito"
                width="25px"
              />
            </ButtonsHeader>
          </ContentButtons>

          <ButtonCerrar onClick={() => setopen(false)}>
            <FontAwesomeIcon icon={faWindowClose} size="3x" color="red" />
          </ButtonCerrar>
        </ListLinks>
        <ButtonHamburguesa onClick={() => setopen(true)}>
          <img
            src="/index/header/button.svg"
            alt="boton hamburguesa"
            width="100%"
            height="100%"
          />
        </ButtonHamburguesa>
      </HeaderPrincipal>
      <Navigator>
        
      </Navigator>
    </ContentHeader>
  );
}
 
export default Header;