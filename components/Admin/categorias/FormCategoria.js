import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useAlert } from 'react-alert'
const FormCategoria = ({ edit ,data, setRows, categoria, setcategoria,setedit,id}) => {

  const [loading, setloading] = useState(false)
  
  const alert = useAlert()
  const handleInputChange = ({target}) => {
      setcategoria({...categoria,nombre : target.value})
  }
  const agregarCategoria = ()=> {
    setloading(true)
    fetch(`${process.env.NEXT_PUBLIC_API}/api/categorias`,{
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body :JSON.stringify({nombre : categoria.nombre})
    }).then(res => res.json())
    .then(resp => {
      setTimeout(() => {
        
        setloading(false)
      }, 1500);
      alert.success(resp.message)
      setRows([...data,{idCategoria: resp.rows.insertId,nombre : categoria.nombre}])
      setcategoria({id : null , nombre : ""})
    })
  }
  const editarCategoria = ()=> {
      setedit(false)
      
       setloading(true);
       fetch(`${process.env.NEXT_PUBLIC_API}/api/categorias/${categoria.id}`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ nombre: categoria.nombre }),
       })
         .then((res) => res.json())
         .then((resp) => {
           setTimeout(() => {
             setloading(false);
           }, 1500);
           alert.success(resp.message);
           let newRows = data.map((cat) => 
           cat.idCategoria == categoria.id
           ? {...cat,nombre : categoria.nombre}
           : cat
           )
           setRows(newRows);
          setcategoria({ id: null, nombre: "" });
         });
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" color="inherit">
        {edit ? "Editar Categoria" : "Agregar Categoria"}
      </Typography>
      <TextField
        id="outlined-name"
        label="Nombre"
        name="nombre"
        value={categoria.nombre}
        onChange={handleInputChange}
        
      />
      <Button
        variant="contained"
        color="primary"
        onClick={edit ? editarCategoria : agregarCategoria}
        disabled={loading}
      >
        {edit ? "Editar" : "Agregar"}
      </Button>
    </Box>
  );
};

export default FormCategoria;
