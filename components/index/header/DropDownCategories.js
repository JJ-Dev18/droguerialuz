import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCheck } from "../../../hooks/useCheck";
import {
  Categoria,
  ContentDropDown,
  ListSubCategoria,
  SubCategoria,
  SubMenu,
} from "./DropDownStyles";
import { NavLink } from "./NavLink";

const DropDownCategories = ({ categorias }) => {

  const [initialForm, setInitialForm] = useState(() => {
    let initialstate = {};
    categorias.map((categoria, index) => {
      initialstate[`${categoria.nombre}`] = false;
    });
    return initialstate;
  });

  const [formValues, handleInputChange, reset] = useCheck(initialForm);
  //  const {BEBEYMATERNIDAD,MERQUEAQUI} = formValues;
  console.log(formValues, "thisis formvalue");

  const checkedCategoria = (e) => {
    console.log(e);
  };
  return (
    <ContentDropDown>
      <ul>
        {Object.keys(formValues).map((categoria) => (
          <>
            <Categoria select={formValues[`${categoria}`]} key={categoria}>
              <input
                type="radio"
                name={categoria}
                onChange={handleInputChange}
                checked={formValues[`${categoria}`]}
                // style="height: 29px; width: 250px;"
              />
              <NavLink href="">
                <a href="">
                  <FontAwesomeIcon icon={faBeer} size="2x"></FontAwesomeIcon>
                  {categoria}
                </a>
              </NavLink>
            </Categoria>
            <p>{JSON.stringify(formValues[`${categoria}`])}</p>
            <SubCategoria open={formValues[`${categoria}`]}>
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
          </>
        ))}
        {/* <Categoria select={BEBEYMATERNIDAD}>
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
        </Categoria> */}
      </ul>
    </ContentDropDown>
  );
};

export default DropDownCategories;
