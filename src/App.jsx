import "./index.css";
import Navbar from "./components/Navbar";
import StorefrontPage from "./components/Storefront-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IniciarSesion from "./components/IniciarSesion";
import Registrarse from "./components/Registrarse";
import CuentaUsuario from "./components/CuentaUsuario";
import Productos from "./components/Productos";
import Perfil from "./components/Perfil";
import Direccion from "./components/Direccion";
import Producto from "./components/Producto";

function App() {
  var userlogin = "false";
  // if (userlogin) {
  //   return (
  //     <>
  //       <Navbar logeado={userlogin}/>
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/" element={<StorefrontPage />} />
  //           <Route path="/iniciarSesion" element={<IniciarSesion />} />
  //           <Route path="/registrarse" element={<Registrarse />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </>
  //   );
  // }
  userlogin = "false";
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StorefrontPage />} />
          <Route path="/iniciarSesion" element={<IniciarSesion />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/cuenta/" element={<CuentaUsuario />}>
            <Route path={`perfil`} element={<Perfil />} />
            <Route path={`direccion`} element={<Direccion />} />
          </Route>
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/nuevosProductos" element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
