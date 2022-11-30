import { Outlet, Link } from "react-router-dom";

export default function CuentaUsuario() {
  return (
    <div>
      <div className="container bg-slate-200 mx-auto p-5">
        <div>
          <ul className="flex">
            <li className="mr-5 hover:font-bold hover:text-indigo-900">
              <Link to="perfil">Perfil</Link>
            </li>
            <li className="mr-5 hover:font-bold hover:text-indigo-900">
              <Link to="direccion">Dirección</Link>
            </li>
            <li className="mr-5 hover:font-bold hover:text-indigo-900">
              <Link to="productos">Productos</Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
