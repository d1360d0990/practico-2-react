import { useState } from "react";
import "../Styles/Formulario.css";

const Formulario = ({ onAgregar }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && precio && categoria) {
      const nuevoProducto = {
        id: Date.now(),
        nombre,
        precio: parseFloat(precio),
        categoria,
      };
      onAgregar(nuevoProducto);
      setNombre("");
      setPrecio("");
      setCategoria("");
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default Formulario;
