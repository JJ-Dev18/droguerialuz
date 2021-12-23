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
// import { DropZone } from "./DropZone";

const FormUsuario = ({  data, disabledG, edit, setdataUsuario }) => {
  console.log(data)
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
  const { nombre, telefono,cedula,direccion,correo,password,rol } = formvalues;
  const [loading, setLoading] = useState(false);

  const dataUsuario = { nombre, telefono, cedula, direccion, correo, password , rol};
  

  const editUsuario = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API}/api/usuarios/${data.idUsuario}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUsuario),
    })
      .then((resp) => resp.json())
      .then((res) => {
        setLoading(false);
        alert.success(res.message);
        // setdataProducto({ ...data, ...dataUsuario });
      });
  };

  const agregarUsuario = () => {
   
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API}/api/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        telefono,
        cedula,
        direccion,
        correo,
        password,
        rol,
      }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        alert.success(res.message);
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
        label="Telefono"
        name="telefono"
        value={telefono}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="cedula"
        name="cedula"
        value={cedula}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="direccion"
        name="direccion"
        value={direccion}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="correo"
        name="correo"
        value={correo}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-name"
        label="password"
        name="password"
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
          name="rol"
          onChange={handleInputChange}
          label="Rol"
          disabled={disabledG}
        >
          <MenuItem  value="1">
            Administrador
          </MenuItem>
          <MenuItem  value="2">
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

export default FormUsuario;
