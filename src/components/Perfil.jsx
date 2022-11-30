import axios from "axios";
import React, { useEffect } from "react";

export default function Perfil() {
  // const getUsers = async () => {
  //   const { data } = await axios.get("http://localhost:3000/api/productos");
  //   console.log(data);
  // };
  useEffect(() => {
    async function users() {
      // const data = await axios.get("http://localhost:3000/api/productos", {
      //   mode: "no-cors",
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //   },
      // });
      // const {data} = await axios.get(`http://localhost:3000/api/productos`);
      // console.log(data);
    }
    users();
  }, []);
  return (
    <div className="container mx-10 p-5">
      <h1 className="text-lg font-medium leading-6 text-gray-900 mb-2">Perfil</h1>      

      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 text-indigo-900 font-semibold whitespace-nowrap dark:text-white"
              >
                Nombre de usuario
              </th>
              <td class="py-4 px-6">Antonio</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 text-indigo-900 font-semibold whitespace-nowrap dark:text-white "
              >
                Nombre completo
              </th>
              <td class="py-4 px-6">Jose Antonio Salas Portugal</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 text-indigo-900 font-semibold whitespace-nowrap dark:text-white"
              >
                Correo eléctronico
              </th>
              <td class="py-4 px-6">antonio.salas255@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
