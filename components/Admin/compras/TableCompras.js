import * as React from "react";
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
import { useRouter } from "next/router";
import { useAlert } from "react-alert";

export default function TableCompras({ compras }) {
  const [rows, setRows] = React.useState(compras);
  const router = useRouter();
  const alert = useAlert();
  const requestSearch = (event, newValue) => {
    if (newValue !== null) {
      const filteredRows = compras.filter((row) => {
        return row.idCompra === newValue;
      });
      setRows(filteredRows);
    } else {
      setRows(compras);
    }
  };

  const deleteUsuario = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API}/api/compras/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => {
        alert.error(resp.message);
        let newRows = rows.filter((row) => row.idCompra !== id);
        setRows(newRows);
      });
  };

  return (
    <Paper>
      <Stack spacing={2} sx={{ width: "100% " }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          onChange={requestSearch}
          options={compras.map((option) => option.idCompra)}
          renderInput={(params) => (
            <TextField {...params} label="Buscar compra" />
          )}
        />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id Compra </TableCell>
              <TableCell>Valor Total </TableCell>
              <TableCell>Productos </TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.idProducto}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.idCompra}</TableCell>
                <TableCell>{row.valorTotal}</TableCell>
                <TableCell>{row.productos}</TableCell>
               
                {/* <TableCell>
                  <ButtonGroup
                    variant="text"
                    aria-label="outlined button group"
                  >
                    <Button
                      onClick={() =>
                        router.push(`/admin/producto/${row.idUsuario}`)
                      }
                    >
                      <EditIcon />
                    </Button>
                    <Button onClick={() => deleteUsuario(row.idUsuario)}>
                      <DeleteIcon sx={{ color: "red" }} />
                    </Button>
                  </ButtonGroup>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
