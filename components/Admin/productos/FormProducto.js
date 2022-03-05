
import { FormControl, InputLabel, MenuItem, Select, Typography, Button,Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import {useAlert} from 'react-alert'
import { DropZone } from "./DropZone";

const FormProducto = ({ grupos, data, disabledG, edit, setdataProducto }) => {
  const initialstate = {
    nombre: data?.nombre || "",
    descripcion: data?.descripcion || "",
    price: data?.price || "",
    stock: data?.stock || "",
    descuento: data?.descuento || "0",
    grupo: data?.Grupo_idGrupo || "",
  };
  const alert = useAlert();
  const [checked, setchecked] = useState((data?.factura == '1') ? false : true) 
  // const [factura, setfactura] = useState(data?.factura || '1')
  const [formvalues, handleInputChange, reset] = useForm(initialstate);
  const { nombre, descripcion, price, stock, descuento, grupo } = formvalues;
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  let factura = checked ? "2" : "1";

  const dataProducto = { nombre, descripcion, price, stock, descuento ,factura};
  const handleChange = (event) => {
    setchecked(event.target.checked);

  };
  
  const editProducto = () => {
   
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API}/api/products/${data.idProducto}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataProducto),
    })
      .then((resp) => resp.json())
      .then((res) => {
        
        setLoading(false);
        alert.success(res.message);
        setdataProducto({...data,...dataProducto})
      });
  };

  const agregarProducto = () => {
    let factura = checked ? '2' : '1'
   
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("price", price);
    formData.append("factura", factura)
    formData.append("stock", stock);
    formData.append("descuento", descuento);
    formData.append("Grupo_idGrupo", grupo);
    files.forEach((img, index) => formData.append(`img${index}`, img));
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API}/api/products`, {
      method: "POST",
      //  headers: {
      //    "x-token": token,
      //  },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((res) => {
        setLoading(false);
        alert.success(res.msg);
        reset();
      });
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" color="initial">
        {edit ? "Editar Producto" : "Agregar Producto"}
      </Typography>
      <TextField
        id="outlined-name"
        label="Nombre"
        name="nombre"
        value={nombre}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="Descripcion"
        name="descripcion"
        value={descripcion}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="Precio"
        name="price"
        value={price}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="Stock"
        name="stock"
        value={stock}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="Descuento"
        name="descuento"
        value={descuento}
        onChange={handleInputChange}
      />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Grupo</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={grupo}
          name="grupo"
          onChange={handleInputChange}
          label="Grupo"
          disabled={disabledG}
        >
          {grupos.map((grupo) => (
            <MenuItem key={grupo.idGrupo} value={grupo.idGrupo}>
              {grupo.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={handleChange} name="Factura" />
        }
        label="Factura"
      />
      
      <DropZone files={files} setFiles={setFiles} />
      <Button
        variant="contained"
        color="primary"
        onClick={edit ? editProducto : agregarProducto}
        disabled={loading}
      >
        {edit ? "Editar" : "Agregar"}
      </Button>
    </Box>
  );
};

export default FormProducto;
