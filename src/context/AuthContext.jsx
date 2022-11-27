import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const authInicial = null;

export default function AuthProvider({ children }) {
  // const auth = JSON.parse(localStorage.getItem("auth"));
  const auth = '';
  

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
