
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
  Chip,
  Stack,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";


const TableDomicilios = ({data,estado}) => {
  
  const [rows, setrows] = React.useState(data)
  console.log(data)
  React.useEffect(() => {
     setrows(data)
  }, [data])
  
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Referencia </TableCell>
              <TableCell>Descripcion </TableCell>
              <TableCell>Direccion </TableCell>
              <TableCell>Total </TableCell>
              <TableCell align="center">Estado </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.referencia}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.direccion}</TableCell>
                <TableCell align="center">{row.total}</TableCell>

                <TableCell>
                  {row.estado == "0" && <Chip label="En proceso" color="primary" />}
                  {row.estado == "1" && (
                    <Chip label="Empacando" color="secondary" />
                  )}
                  {row.estado == "2" && <Chip label="En camino" color="warning" />}
                  {row.estado == "3" && <Chip label="Entregado" color="success" />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
 
export default TableDomicilios;