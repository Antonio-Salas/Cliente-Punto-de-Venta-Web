import AgregarProducto from '../AgregarProducto'
import { useState } from 'react'

export default function AdministrarProductos({productos, eliminarProducto}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <AgregarProducto open={open} setOpen={setOpen}/>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Productos registrados
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400 py-2">
            Lista de los productos agregados para la venta
          </p>
          <button
          onClick={() => setOpen(true)}
          className="rounded-md border border-transparent bg-indigo-600 py-1 px-1 text-center font-medium text-white hover:bg-indigo-700">Agregar producto</button>
        </caption>

        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Nombre del producto
            </th>
            {/* <th scope="col" className="py-3 px-6">
              Color
            </th> */}
            <th scope="col" className="py-3 px-6">
              Código
            </th>
            {/* <th scope="col" className="py-3 px-6">
              Disponibilidad
            </th> */}
            <th scope="col" className="py-3 px-6">
              Precio
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>

          {
            productos.map(
              (producto) => (

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={producto.idproducto}>
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {producto.nombre}
            </th>
            {/* <td className="py-4 px-6">Sliver</td> */}
            <td className="py-4 px-6">{producto.codigo}</td>
            {/* <td className="py-4 px-6">Yes</td>
            <td className="py-4 px-6">Yes</td> */}
            <td className="py-4 px-6">${producto.precio_venta}</td>
            <td className="flex items-center py-4 px-6 space-x-3">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Editar
              </a>
              <a
                onClick={()=>{eliminarProducto(producto.idproducto)}}
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Eliminar
              </a>
            </td>
          </tr>   
              )
            )
          }



        </tbody>
      </table>
    </div>
  );
}
