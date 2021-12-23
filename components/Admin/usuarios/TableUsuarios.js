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

export default function TableUsuarios({ usuarios }) {
  const [rows, setRows] = React.useState(usuarios);
  
  const router = useRouter();
  const alert = useAlert();
  const requestSearch = (event, newValue) => {
    if (newValue !== null) {
      const filteredRows = usuarios.filter((row) => {
        return row.nombre.toLowerCase().includes(newValue.toLowerCase());
      });
      setRows(filteredRows);
    } else {
      setRows(usuarios);
    }
  };

  const deleteUsuario = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API}/api/usuarios/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => {
        alert.error(resp.message);
        let newRows = rows.filter((row) => row.idUsuario !== id);
        setRows(newRows);
      });
  };

  return (
    <Paper > 
      <Stack spacing={2} sx={{ width: "100% " }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          onChange={requestSearch}
          options={usuarios.map((option) => option.nombre)}
          renderInput={(params) => (
            <TextField {...params} label="Buscar Usuario" />
          )}
        />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre </TableCell>
              <TableCell>Telefono </TableCell>
              <TableCell>Cedula </TableCell>
              <TableCell>Direccion </TableCell>
              <TableCell align="center">Correo </TableCell>
              <TableCell>Password </TableCell>
              <TableCell>Rol </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.idUsuario}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.telefono}</TableCell>
                <TableCell>{row.cedula}</TableCell>
                <TableCell>{row.direccion}</TableCell>
                <TableCell align="center">{row.correo}</TableCell>
                <TableCell>{row.password}</TableCell>
                <TableCell>
                  {row.rol === 1 ? "Administrador" : "Usuario"}
                </TableCell>

                <TableCell>
                  <ButtonGroup
                    variant="text"
                    aria-label="outlined button group"
                  >
                    <Button
                      onClick={() =>
                        router.push(`/admin/usuarios/${row.idUsuario}`)
                      }
                    >
                      <EditIcon />
                    </Button>
                    <Button onClick={() => deleteUsuario(row.idUsuario)}>
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
