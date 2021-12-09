import React,{useState,useEffect, useCallback} from 'react';
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
import { cartDelete, loggoutAdmin, logout } from '../../../context/actions';
import MenuUser from '../user/MenuUser';


const Header = (props) => {
   const alert = useAlert();
  const [open, setopen] = useState(false);
  const [openCarrito, setCarrito] = useState(false);
  const [userMenu, setuserMenu] = useState(false)
  const [dropdown, setdropdown] = useState(false);
  const {value} = useAppContext();
  const { state, dispatch} = value;
  const { cartItems,total} = state.cart
  const { logged,adminLogged } = state
  const { avatar } = state.user
  const cantProductos = cartItems.length
  const router = useRouter();

 
  const openLogin = ()=> {
    props.openLogin()
    setopen(false)
  }
  const openRegister = ()=>{
    props.openRegister()
    setopen(false)
  }
  const closeMenu = () => {
    setopen(false);
  };
  const deleteP = useCallback((id) => {
     dispatch(cartDelete(id));
     alert.error("Producto eliminado del carrito");
   },
    [dispatch,alert],
  )
   const loggout = ()=> {
     if(adminLogged){
       dispatch(loggoutAdmin())
       router.push("/")
     }
     else{
       dispatch(logout())
     }
    //  google.accounts.id.disableAutoSelect();
    //  google.accounts.id.revoke(localStorage.getItem("correo"), (done) => {
       localStorage.clear();
       //  location.reload();
    //  });
     setopen(false)
   }
  
  return (
    <ContentHeader>
      <ContentPregunta>
        <p>PREGUNTA POR NUESTRAS MEJORES PROMOCIONES</p>
      </ContentPregunta>
      <HeaderPrincipal>
        <Logo
          src={"/index/header/logo.svg"}
          alt="logo drogueria"
          width="60%"
          height="50px"
        />
        <ListLinks open={open}>
          {!logged ? (
            <>
              <Enlaces onClick={openLogin} className="cursor">
                {/* <Link href="/ingresar">Ingresar</Link> */}
                Ingresar
              </Enlaces>
              <Enlaces onClick={openRegister} className="cursor">
                Registrate
              </Enlaces>
            </>
          ) : (
            <Enlaces onClick={loggout} className="cursor">
              Cerrar Sesion
            </Enlaces>
          )}

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
            <ButtonsHeader
              background=" #223059"
              onClick={() => setuserMenu(true)}
              onMouseOver={() => setuserMenu(true)}
              onMouseLeave={() => setuserMenu(false)}
            >
              {logged ? (
                <Image
                  src={avatar ? avatar : "/index/header/user.svg"}
                  alt="imagen boton usario"
                  width="20px"
                  height="20px"
                  className="rounded"
                />
              ) : (
                <Image
                  src={"/index/header/user.svg"}
                  alt="imagen boton usario"
                  width="20px"
                  height="20px"
                />
              )}
              {userMenu && <MenuUser logged={logged} openLogin={openLogin}/>}
            </ButtonsHeader>
            <ButtonsHeader
              background=" #ffff"
              onClick={() => {
              setCarrito(true);
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
              {openCarrito && (
                <ContentCard productos={cartItems} deleteP={deleteP} total={total} closeMenu={closeMenu}/>
              )}

              <Badge cantidad={cantProductos} />
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
          {dropdown && <DropDownCategories  grupos={props.grupos} />}
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