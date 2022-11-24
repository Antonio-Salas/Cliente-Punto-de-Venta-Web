import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "./Perfil";

export default function CuentaUsuario() {
  return (
    <div>
      <div className="container bg-slate-200 mx-auto p-5">
        <div>
          <ul className="flex">
            <li className="mr-5 hover:font-bold hover:text-indigo-900">
              <a href="/cuenta/perfil">Perfil</a>
            </li>
            <li className="mr-5 hover:font-bold hover:text-indigo-900">
              <a href="#">Dirección</a>
            </li>
            <li className="mr-5 hover:font-bold hover:text-indigo-900">
              <a href="#">Formas de pago</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
