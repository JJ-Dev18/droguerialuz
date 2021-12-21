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
import { useRef } from "react";
import { Row } from "./RowGrupos";
import { useAlert } from "react-alert";

export default function CollapsibleTable({rows,setRows,setCategoria,setEdit}) {
  const categoria = useRef(rows);
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
  const deleteCategoria = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API}/api/categorias/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => {
        alert.error(resp.message);
        let newRows = rows.filter((row) => row.idCategoria !== id);
        setRows(newRows);
      }).catch(err=> {
        console.log(err)
      });
  };



  return (
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
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Nombre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.nombre}
                row={row}
                deleteCategoria={deleteCategoria}
                setEdit={setEdit}
                setCategoria={setCategoria}
               
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
