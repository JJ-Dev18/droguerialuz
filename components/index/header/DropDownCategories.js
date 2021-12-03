import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useCheck } from "../../../hooks/useCheck";
import {
  Categoria,
  ContentDropDown,
  ListSubCategoria,
  SubCategoria,
  SubMenu,
} from "./DropDownStyles";
import { NavLink } from "./NavLink";

const DropDownCategories = ({ grupos }) => {

  const sacarCategorias = () => {
    let hash = {};
    let initialstate = {}
    grupos
      .filter(function (current) {
        let exists = !hash[current.categoria];
        hash[current.categoria] = true;
        return exists;
      })
      .map((categoria, index) => {
        initialstate[`${categoria.categoria}`] = false;
      });
       
    return initialstate;
  };
  const stateInitial = useMemo(() => sacarCategorias, grupos);

  const [initialForm, setInitialForm] = useState(stateInitial);
 
  const [formValues, handleInputChange, reset] = useCheck(initialForm);

  
  return (
    <ContentDropDown>
      <ul>
        {Object.keys(formValues).map((categoria) => (
          <React.Fragment key={categoria}>
            <Categoria select={formValues[`${categoria}`]}>
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
            <SubCategoria open={formValues[`${categoria}`]}>
              <ListSubCategoria>
                <li>
                  {grupos
                    .filter((grupo) => grupo.categoria === categoria)
                    .map((grup) => (
                      <SubMenu key={grup.idGrupo}>
                        <NavLink href={`/productos/${grup.idGrupo}`}>
                          <li>
                            <span>{grup.nombre}</span>
                          </li>
                        </NavLink>
                      </SubMenu>
                    ))}
                </li>
              </ListSubCategoria>
            </SubCategoria>
          </React.Fragment>
        ))}
       
      </ul>
    </ContentDropDown>
  );
};

export default DropDownCategories;
