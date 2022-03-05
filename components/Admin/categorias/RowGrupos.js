import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {useAlert} from 'react-alert'
import {
  Autocomplete,
  Button,
  ButtonGroup,
  Stack,
  TextField,
} from "@mui/material";

export const  Row = (props) =>  {
  const alert = useAlert()
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [loading,setLoading] = React.useState(false)
  const [grupo,setGrupo] = React.useState({
    nombre :'',
    idGrupo : null
  })
  const [ grupos, setGrupos] = React.useState(row.grupos || [])
  const [edit, setEdit ] = React.useState(false)
  const handleNombre = ({target})=> {
    setGrupo({ ...grupo, nombre: target.value });
  }
    const crearGrupo = () => {
      setLoading(true);
      fetch(`${process.env.NEXT_PUBLIC_API}/api/grupos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre : grupo.nombre, Categoria_idCategoria: row.idCategoria }),
      })
        .then((res) => res.json())
        .then((resp) => {
          setTimeout(() => {
            setLoading(false);
          }, 1500);
          alert.success(resp.message);
          setGrupos([...grupos,{idGrupo : resp.rows.insertId , nombre : grupo.nombre} ])
          setGrupo({
            nombre: "",
            idGrupo: null,
          });
        });
    };
 const editarGrupo = () => {
   setEdit(false);
   setLoading(true);
   fetch(`${process.env.NEXT_PUBLIC_API}/api/grupos/${grupo.idGrupo}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ nombre: grupo.nombre }),
   })
     .then((res) => res.json())
     .then((resp) => {
       setTimeout(() => {
         setLoading(false);
       }, 1500);
       alert.success(resp.message);
       let newRows = grupos.map((group) =>
         group.idGrupo == grupo.idGrupo
           ? { ...group, nombre: grupo.nombre }
           : group
       );
       setGrupos(newRows);
         setGrupo({
           nombre: "",
           idGrupo: null,
         });
     });
 };
    const deleteGrupo = (id) => {
      
      fetch(`${process.env.NEXT_PUBLIC_API}/api/grupos/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((resp) => {
          alert.error(resp.message);
          let newRows = grupos.filter((group) => group.idGrupo !== id);
          setGrupos(newRows);
        })
        .catch(err => console.log(error));
    };
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nombre}
        </TableCell>
        <TableCell>
          <ButtonGroup variant="text" aria-label="outlined button group">
            <Button
              onClick={() => {
                props.setCategoria({ id: row.idCategoria, nombre: row.nombre });
                props.setEdit(true);
              }}
            >
              <EditIcon />
            </Button>
            <Button onClick={() =>{
        
              if(grupos.length == 0 ){
               props.deleteCategoria(row.idCategoria);
              }
              else{
               alert.error(
                 "No se puede eliminar la categoria por que tiene grupos creados, eliminar primero los grupos"
               );
              }
            } }>
              <DeleteIcon sx={{ color: "red" }} />
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Grupos
                <TextField
                  id="outlined-name"
                  label="Nombre"
                  name="nombre"
                  value={grupo.nombre}
                  onChange={handleNombre}
                  variant="standard"
                  style={{marginLeft:'30px'}}
                />
                <Button disabled={loading}>
                  {
                    edit ?<EditIcon onClick={()=> editarGrupo()}/> : <AddBoxIcon onClick={crearGrupo} />
                  }
                 
                </Button>
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {grupos?.map((grupo, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {grupo.nombre}
                      </TableCell>
                      <TableCell>
                        <ButtonGroup
                          variant="text"
                          aria-label="outlined button group"
                        >
                          <Button  
                          >
                            <EditIcon onClick={()=> {
                              setGrupo({
                                nombre : grupo.nombre,
                                idGrupo : grupo.idGrupo
                              })
                              setEdit(true)
                            }}/>
                          </Button>
                          <Button
                            onClick={() =>
                             deleteGrupo(grupo.idGrupo)}
                          >
                            <DeleteIcon sx={{ color: "red" }} />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


