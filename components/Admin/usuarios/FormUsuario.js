import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useAlert } from "react-alert";
import { DropZone } from "./DropZone";

const FormUsuario = ({  data, disabledG, edit, setdataUsuario }) => {
  const initialstate = {
    nombre: data?.nombre || "",
    telefono: data?.telefono || "",
    cedula: data?.cedula || "",
    direccion: data?.direccion || "",
    correo: data?.correo || "",
    password: data?.password || "",
    rol : data?.rol || ''
  };
  const alert = useAlert();
  const [formvalues, handleInputChange, reset] = useForm(initialstate);
  const { nombre, descripcion, price, stock, descuento, grupo } = formvalues;
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const dataUsuario = { nombre, telefono, cedula, direccion, correo, password };

  const editUsuario = () => {
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
        setdataProducto({ ...data, ...dataUsuario });
      });
  };

  const agregarUsuario = () => {
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("price", price);
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
        {edit ? "Editar Usuario" : "Agregar Usuario"}
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
        name="telefono"
        value={telefono}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="Precio"
        name="cedula"
        value={cedula}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="Stock"
        name="direccion"
        value={direccion}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="Descuento"
        name="correo"
        value={correo}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="Descuento"
        name="paswword"
        type="password"
        value={password}
        onChange={handleInputChange}
      />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Rol</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={rol}
          name="grupo"
          onChange={handleInputChange}
          label="Grupo"
          disabled={disabledG}
        >
          <MenuItem key={roles.idGrupo} value="1">
            Administrador
          </MenuItem>
          <MenuItem key={roles.idGrupo} value="2">
            Usuario
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={edit ? editUsuario : agregarUsuario}
        disabled={loading}
      >
        {edit ? "Editar" : "Agregar"}
      </Button>
    </Box>
  );
};

export default FormProducto;
