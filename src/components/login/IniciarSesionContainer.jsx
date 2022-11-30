import React, { useState } from "react";
import IniciarSesion from "./IniciarSesion";
import { useNavigate } from "react-router-dom";

export default function IniciarSesionContainer() {
  const [datos, setDatos] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setDatos({ ...datos, [name]: value });
  };

  const onSubmit = () => {
    localStorage.setItem("auth", '"yes"');
    localStorage.setItem("ad", '"yes"')
    navigate("");
  };
  return (
    <IniciarSesion
      onSubmit={onSubmit}
      inputChange={inputChange}
      datos={datos}
    />
  );
}
