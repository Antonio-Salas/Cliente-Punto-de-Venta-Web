import React, { useContext } from "react";
import Navbar from "./Navbar";

export default function NavbarContainer() {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const onSubmit = () => {
    localStorage.setItem('auth', '"false"')
  }
  return <Navbar auth={auth} onSubmit={onSubmit} />;
}
