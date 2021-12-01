import { faCog, faShoppingBasket, faSignInAlt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentMenuUser } from "./userStyles";

const MenuUser = ({logged}) => {
  return (
    <ContentMenuUser>
      <ul>
        {logged ? (
          <>
            <li>
              <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon> Perfil
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>{" "}
              Compras
            </li>
            <li>
              <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
              Configuracion
            </li>
          </>
        ) : (
          <li>
            <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
            Iniciar Sesion
          </li>
        )}
      </ul>
    </ContentMenuUser>
  );
}
 
export default MenuUser;