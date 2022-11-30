import axios from "axios";
import React, { useEffect, useState } from "react";

import Productos from "./Productos";

export default function ProductosContainer() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    async function users() {
      const { data } = await axios.get(`http://localhost:3000/api/productos`);
      setProductos(data);
    }
    users();
  }, [productos]);

  return <Productos productos={productos} />;
}
