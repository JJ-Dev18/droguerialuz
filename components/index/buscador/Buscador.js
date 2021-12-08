import { useState } from "react";
import styled from 'styled-components'
import {  BuscadorInput, ContentBuscador, ContentImagen, ContentInfo, InfoBuscador, ListResults } from "./buscadorStyles";
import Downshift from "downshift";
import { useRouter } from "next/router";

const items = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" },
];
const Buscador = ({data}) => {
  const router = useRouter()
  const [busqueda, setBusqueda] = useState('')
  const handleChange = ({target})=> {
      setBusqueda(target.value)
  }
  return (
    <ContentBuscador fondo="/index/buscador/fondo.webp">
      <InfoBuscador>
        <ContentInfo>
          <h2>Busca tus productos y medicamentos que necesites</h2>
          <Downshift
            onChange={(selection) =>
              router.push(`/producto/${selection.idProducto}`)
           
            }
            itemToString={(item) => (item ? item.nombre : "")}
            
          >
            {({
              getInputProps,
              getItemProps,
              getLabelProps,
              getMenuProps,
              isOpen,
              inputValue,
              highlightedIndex,
              selectedItem,
              getRootProps,
            }) => (
              <div style={{width: '100%',zIndex:999,position:'relative'}}>
                {/* <label {...getLabelProps()}>Enter a fruit</label> */}
                <div
                  
                  {...getRootProps({}, { suppressRefError: true })}
                >
                  <BuscadorInput
                    {...getInputProps()}
                    placeholder="Busca el nombre del producto o el medicamento"
                    icon="/index/buscador/lupa.svg"
                  />
                </div>

                <ListResults {...getMenuProps()} >
                  {
                  isOpen
                    ? data
                        .filter(
                          (item) =>
                            !inputValue || item.nombre.toLowerCase().includes(inputValue)
                        )
                        .map((item, index) => (
                          <li
                          key={item.idProducto}
                            {...getItemProps({
                              key: item.idProducto,
                              index,
                              item,
                              style: {
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "lightgray"
                                    : "white",
                                fontWeight:
                                  selectedItem === item ? "bold" : "normal",
                              },
                            })}
                          >
                             {(item.nombre) ? item.nombre : 'No hay coincidencias'}
                          </li>
                        ))
                    : null}
                </ListResults>
              </div>
            )}
          </Downshift>
          {/* <BuscadorInput
            type="text"
            name="Nombre"
            placeholder="Busca el nombre del producto o el medicamento"
            icon="/index/buscador/lupa.svg"
          /> */}
        </ContentInfo>
        <ContentImagen>
          <img src="/index/buscador/Chica_home.webp" alt="imagen empleada" />
        </ContentImagen>
      </InfoBuscador>
    </ContentBuscador>
  );
}
 
export default Buscador;