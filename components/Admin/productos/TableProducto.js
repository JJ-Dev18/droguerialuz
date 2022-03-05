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
import { useRouter } from "next/router";
import { useAlert } from "react-alert"

export default function TableProducto({productos}) {

  const [rows, setRows] = React.useState(productos);
 
  const router = useRouter()
  const alert = useAlert()
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

 const deleteProducto = (id)=> {
   fetch(`${process.env.NEXT_PUBLIC_API}/api/products/${id}`, {
     method: 'DELETE'
   }).then(res => res.json())
   .then(resp => {
      alert.error(resp.message);
     let newRows = rows.filter((row) => row.idProducto !== id);
     setRows(newRows);
   })
 }



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
              <TableCell>Factura </TableCell>
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
                <TableCell>{ (row.factura == '1')? 'No' : 'Si'}</TableCell>
                <TableCell align="center">{row.descuento}</TableCell>
                <TableCell>
                  <ButtonGroup
                    variant="text"
                    aria-label="outlined button group"
                  >
                    <Button
                      onClick={() =>
                        router.push(`/admin/producto/${row.idProducto}`)
                      }
                    >
                      <EditIcon />
                    </Button>
                    <Button onClick={() => deleteProducto(row.idProducto)}>
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
  );
}
