import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import IniciarSesion from "./IniciarSesion";

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

  let url = "http://localhost:3000/api/login";

  // useEffect(() => {
  //   async function users() {
  //     const {data} = await axios.post(url,{
  //       "email": datos.email,
  //       "password": datos.password,
  //     });
  //     console.log(data);
  //   }
  //   users();
  // }, []);

  const login = async () => {
    const {data} = await axios.post(`${url}`,{
      "email": datos.email,
      "password": datos.password,
    });
    console.log(data);
  }
  return (
    <IniciarSesion
      onSubmit={onSubmit}
      inputChange={inputChange}
      datos={datos}
    />
  );
}
