import "./index.css";
import StorefrontPage from "./components/Storefront-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registrarse from "./components/Registrarse";
import CuentaUsuario from "./components/CuentaUsuario";
import Productos from "./components/Productos";
import Perfil from "./components/Perfil";
import Direccion from "./components/Direccion";
import Producto from "./components/Producto";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import AuthProvider from "./context/authContext";
import IniciarSesionContainer from "./components/login/IniciarSesionContainer";

function App() {
  
  return (
    <>
    <AuthProvider>
      <NavbarContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StorefrontPage />} />
          <Route path="/iniciarSesion" element={<IniciarSesionContainer />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/cuenta/" element={<CuentaUsuario />}>
            <Route path={`perfil`} element={<Perfil />} />
            <Route path={`direccion`} element={<Direccion />} />
          </Route>
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/nuevosProductos" element={<Productos />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
