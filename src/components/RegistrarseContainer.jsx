import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Registrarse from "./Registrarse";

export default function RegistrarseContainer() {
  const [datos, setDatos] = useState({
    rol: "1",
    nombre_usuario: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  let url = "http://localhost:3000/api/registro";

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setDatos({ ...datos, [name]: value });
  };

  const registro = () => {
    axios.post(`${url}`, {
      rol: "1",
      nombre_usuario: `${datos.nombre_usuario}`,
      email: `${datos.email}`,
      password: `${datos.password}`,
    });

    setDatos({
      rol: "1",
      nombre_usuario: "",
      email: "",
      password: "",
    });
    navigate("/iniciarSesion");
  };
  return (
    <Registrarse datos={datos} inputChange={inputChange} registro={registro} />
  );
}
