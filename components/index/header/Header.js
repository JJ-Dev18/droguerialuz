import React , {useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {  faChevronDown, faSortDown, faWindowClose } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { ButtonCerrar, ButtonHamburguesa, ButtonsHeader, Categories, ContentButtons, ContentHeader, ContentPregunta, ContentRestEnlaces, DropDownCategorias, Enlaces, EnlacesNavegacion, HeaderPrincipal, ListEnlacesNavegacion, ListLinks, Logo, Navegacion, Navigator } from "./headerStyles";
import { NavLink } from './NavLink';
import DropDownCategories from './DropDownCategories';

const Header = () => {

  const [open, setopen] = useState(false)
  const [dropdown, setdropdown] = useState(false)
   const [state, setstate] = useState('entered')
  useEffect(() => {
    console.log(dropdown);
  }, [dropdown])


  return (
    <ContentHeader>
      <ContentPregunta>
        <p>PREGUNTA POR NUESTRAS MEJORES PROMOCIONES</p>
      </ContentPregunta>
      <HeaderPrincipal>
        <Logo src="/index/header/logo.svg" alt="logo drogueria" />
       
            <ListLinks
              open={open} 
            >
              <Enlaces>
                <Link href="/ingresar">Ingresar</Link>
              </Enlaces>
              <Enlaces>
                <Link href="/registrate">Registrate</Link>
              </Enlaces>

              <ContentRestEnlaces>
                <Enlaces>
                  <Link href="/">Home</Link>
                </Enlaces>
                <Enlaces>
                  <Link href="/domicilio">Tu domicilio</Link>
                </Enlaces>
                <Enlaces>
                  <Link href="/quienesSomos">Quienes somos</Link>
                </Enlaces>
              </ContentRestEnlaces>

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
      <Navigator open={open}>
        <Categories
          onMouseOver={() => setdropdown(true)}
          onMouseLeave={() => setdropdown(false)}
        >
          <span>
            <FontAwesomeIcon icon={faChevronDown} size="1x"></FontAwesomeIcon>
            Categorias
          </span>
          {dropdown && <DropDownCategories />}
        </Categories>
        <ListEnlacesNavegacion>
          <EnlacesNavegacion>
            <NavLink href="/">
              <a>Home </a>
            </NavLink>
          </EnlacesNavegacion>
          <EnlacesNavegacion>
            <NavLink href="/domicilio">
              <a>Tu domicilio</a>
            </NavLink>
          </EnlacesNavegacion>
          <EnlacesNavegacion>
            <NavLink href="/quienesSomos">
              <a>Quienes Somos</a>
            </NavLink>
          </EnlacesNavegacion>
        </ListEnlacesNavegacion>
      </Navigator>
    </ContentHeader>
  );
}
 
export default Header;