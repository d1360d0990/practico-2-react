//import React from "react";
import "../Styles/Tabla.css";

const Tabla = ({ productos }) => {
  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>{producto.categoria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
