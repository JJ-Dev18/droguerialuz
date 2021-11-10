import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useCheck } from "../../../hooks/useCheck";
import { Categoria, ContentDropDown, ListSubCategoria, SubCategoria, SubMenu } from "./DropDownStyles";
import { NavLink } from "./NavLink";


const DropDownCategories = () => {

  // const [categoria, setcategoria] = useState(false)
   const initialForm = {
     BEBEYMATERNIDAD: false,
     MERQUEAQUI: false,
    
   };
    const [formValues, handleInputChange, reset] = useCheck(initialForm);
   const {BEBEYMATERNIDAD,MERQUEAQUI} = formValues;

   console.log(BEBEYMATERNIDAD,MERQUEAQUI)
  const checkedCategoria = (e)=> {
     console.log(e)
  }
  return (
    <ContentDropDown>
      <ul>
        <Categoria select={BEBEYMATERNIDAD}>
          <input
            type="radio"
            name="BEBEYMATERNIDAD"
            onChange={handleInputChange}
            checked={BEBEYMATERNIDAD}
            // style="height: 29px; width: 250px;"
          />
          <NavLink href="">
            <a href="">
              <FontAwesomeIcon icon={faBeer} size="2x"></FontAwesomeIcon>
              BEBE Y MATERNINAD
            </a>
          </NavLink>
          <SubCategoria open={BEBEYMATERNIDAD}>
            <ListSubCategoria>
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>{" "}
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>{" "}
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>{" "}
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>{" "}
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>{" "}
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>
              <li>
                <SubMenu>
                  <li>
                    <span>Amoblado</span>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                  <li>
                    <a>otro bebe </a>
                  </li>
                </SubMenu>
              </li>
            </ListSubCategoria>
          </SubCategoria>
        </Categoria>
        <Categoria select={MERQUEAQUI}>
          <input
            type="radio"
            name="MERQUEAQUI"
            onChange={handleInputChange}
            checked={MERQUEAQUI}
            // style="height: 29px; width: 250px;"
          />
          <NavLink href="">
            <a href="">
              <FontAwesomeIcon icon={faBeer} size="2x"></FontAwesomeIcon>MERQUE
              AQUI
            </a>
          </NavLink>
          <SubCategoria open={MERQUEAQUI}>
            <ListSubCategoria>
              <li>
                <SubMenu>
                  <li>
                    <span>Merque Aqui</span>
                  </li>
                  <li>
                    <a> asdfas</a>
                  </li>
                  <li>
                    <a>otro masdfaerque</a>
                  </li>
                </SubMenu>
              </li>
             
            </ListSubCategoria>
          </SubCategoria>
        </Categoria>

      </ul>
    </ContentDropDown>
  );
}
 
export default DropDownCategories;