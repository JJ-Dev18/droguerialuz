import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Autocomplete, Button, ButtonGroup, Stack, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function TableProducto({productos}) {

  const [rows, setRows] = React.useState(productos);
  const requestSearch = (event,newValue) => {
    if(newValue !== null){
      const filteredRows = productos.filter((row) => {
        return row.nombre.toLowerCase().includes(newValue.toLowerCase());
      });
    setRows(filteredRows);
    }
    else{
      setRows(productos)
    }
};





  return (
    <Paper>
      <Stack spacing={2} sx={{ width: "100% " }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          onChange={requestSearch}
          options={productos.map((option) => option.nombre)}
          renderInput={(params) => (
            <TextField {...params} label="Buscar Producto" />
          )}
        />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre </TableCell>
              <TableCell>Descripcion </TableCell>
              <TableCell>Precio </TableCell>
              <TableCell>Stock </TableCell>
              <TableCell align="center">Descuento </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.idProducto}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell align="center">{row.descuento}</TableCell>
                <TableCell>
                  <ButtonGroup
                    variant="text"
                    aria-label="outlined button group"
                  >
                    <Button>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon sx={{ color: "red" }} />
                    </Button>
                    <Button>
                      <VisibilityIcon sx={{ color: "black" }} />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
