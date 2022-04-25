import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  ButtonGroup,
  Chip
} from "@mui/material";


const TableDomicilios = ({rows,cambiarestado}) => {
  

  const agregarCompraDom = ()=> {
    
    cambiarestado("3", row.id, row.idUsuario);
  }
  
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID </TableCell>
              <TableCell>Referencia </TableCell>
              <TableCell>Descripcion </TableCell>
              <TableCell>Direccion </TableCell>
              <TableCell>Total </TableCell>
              <TableCell align="center">Estado </TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
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
                <TableCell>
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button
                      color="secondary"
                      onClick={() => cambiarestado("1", row.id, row.idUsuario)}
                    >
                      Pasar a Empacando
                    </Button>
                    <Button
                      color="warning"
                      onClick={() => cambiarestado("2", row.id, row.idUsuario)}
                    >
                      Pasar a En camino
                    </Button>
                    <Button
                      color="success"
                      onClick={() => cambiarestado("3", row.id, row.idUsuario)}
                    >
                      Pasar a Entregado
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
};

export default TableDomicilios;
