import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {  faChevronDown, faShoppingCart, faSortDown, faWindowClose } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { ButtonCerrar, ButtonHamburguesa, ButtonsHeader, Categories, ContentButtons, ContentHeader, ContentPregunta, ContentRestEnlaces, DropDownCategorias, Enlaces, EnlacesNavegacion, HeaderPrincipal, ListEnlacesNavegacion, ListLinks, Logo, Navegacion, Navigator } from "./headerStyles";
import { NavLink } from './NavLink';
import DropDownCategories from './DropDownCategories';
import Badge from './Badge';
import ContentCard from '../../cart/ContentCard';
import { useRouter } from 'next/router';
import useAppContext from '../../../context/Store';
import { useAlert } from "react-alert";


const Header = () => {
   const alert = useAlert();
  const [open, setopen] = useState(false);
  const [openCarrito, setCarrito] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const {value} = useAppContext();
  const { state, dispatch} = value;
  const { cartItems} = state.cart
  //  const {cartItems} = state.cart
  const cantProductos = cartItems.length
  const router = useRouter();

  const closeMenu = () => {
    setopen(false);
  };
   const deleteP = (props) => {
     
     dispatch({ type: "CART_REMOVE_ITEM", payload: { ...props, quantiti: 1 } });
     alert.show("Producto eliminado del carrito");
   };
  
  return (
    <ContentHeader>
      <ContentPregunta>
        <p>PREGUNTA POR NUESTRAS MEJORES PROMOCIONES</p>
      </ContentPregunta>
      <HeaderPrincipal>
        <Logo src={"/index/header/logo.svg"} alt="logo drogueria"    width="60%" height="50px" />
        <ListLinks open={open}>
          <Enlaces onClick={closeMenu}>
            <Link href="/ingresar">Ingresar</Link>
          </Enlaces>
          <Enlaces onClick={closeMenu}>
            <Link href="/registrate">Registrate</Link>
          </Enlaces>

          <ContentRestEnlaces>
            <Enlaces onClick={closeMenu}>
              <Link href="/">Home</Link>
            </Enlaces>
            <Enlaces onClick={closeMenu}>
              <Link href="/domicilio">Tu domicilio</Link>
            </Enlaces>
            <Enlaces onClick={closeMenu}>
              <Link href="/quienesSomos">Quienes somos</Link>
            </Enlaces>
          </ContentRestEnlaces>

          <ContentButtons>
            <ButtonsHeader>
              <Image
                src={"/index/header/user.svg"}
                alt="imagen boton usario"
                width="20px"
                height="20px"
                // layout="fill"
              />
            </ButtonsHeader>
            <ButtonsHeader
              background=" #ffff"
              onClick={() => {
                closeMenu();
                // router.push("/domicilio");
              }}
             
              onMouseOver={() => setCarrito(true)}
              onMouseLeave={() => setCarrito(false)}
            >
              {/* <img
                src="/index/header/carrito.svg"
                alt="imagen boton carrito"
                width="25px"
              /> */}
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="1x"
              ></FontAwesomeIcon>
              {openCarrito && 
              
              <ContentCard productos={cartItems} deleteP={deleteP}/>
              }

              <Badge cantidad={cantProductos}/>
            </ButtonsHeader>
          </ContentButtons>

          <ButtonCerrar onClick={() => setopen(false)}>
            <FontAwesomeIcon icon={faWindowClose} size="3x" color="red" />
          </ButtonCerrar>
        </ListLinks>

        <ButtonHamburguesa onClick={() => setopen(true)}>
          <Image
            src={"/index/header/button.svg"}
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
};
 
export default Header;