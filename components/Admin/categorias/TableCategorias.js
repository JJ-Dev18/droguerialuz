
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Autocomplete,
  Button,
  ButtonGroup,
  Stack,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import { useRef } from "react";

const TableCategorias = ({rows,setRows,setcategoria,setedit}) => {
  const categoria = useRef(rows)
  
  const router = useRouter();
  const alert = useAlert();

  const requestSearch = (event, newValue) => {
    if (newValue !== null) {
      const filteredRows = rows.filter((row) => {
        return row.nombre.toLowerCase().includes(newValue.toLowerCase());
      });
      setRows(filteredRows);
    } else {
      setRows(categoria.current);
    }
  };
  const deleteProducto = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API}/api/categorias/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => {
        alert.error(resp.message);
        let newRows = rows.filter((row) => row.idCategoria !== id);
        setRows(newRows);
      });
  };
  return (
    <>
      <Paper>
        <Stack spacing={2} sx={{ width: "100% " }}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            onChange={requestSearch}
            options={rows.map((option) => option.nombre)}
            renderInput={(params) => (
              <TextField {...params} label="Buscar Categoria" />
            )}
          />
        </Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre </TableCell>
           
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.idCategoria}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.nombre}</TableCell>
                
                 
                  <TableCell>
                    <ButtonGroup
                      variant="text"
                      aria-label="outlined button group"
                    >
                      <Button
                        onClick={() =>{
                          setcategoria({id:row.idCategoria,nombre : row.nombre})
                          setedit(true)

                        }
                        }
                      >
                        <EditIcon />
                      </Button>
                      <Button onClick={() => deleteProducto(row.idCategoria)}>
                        <DeleteIcon sx={{ color: "red" }} />
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
 
export default TableCategorias;