

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AdministrarProductos from './AdministrarProductos'

export default function AdministrarProductosContainer() {
    const [productos, setProductos] = useState([])
    let urlProductos = `http://localhost:3000/api/productos`;
    useEffect(() => {
        async function getProductos() {
          const {data} = await axios.get(urlProductos);
          // console.log(data);
          setProductos(data);
        }
        getProductos();
      }, [productos]);

      const eliminarProducto = (id) => {
        // console.log("El id es -> "+id)
        axios.delete(`${urlProductos}/${id}`)
      };
  return (
    <AdministrarProductos productos={productos} eliminarProducto={eliminarProducto}/>
  )
}
