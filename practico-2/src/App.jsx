import React, { useState, useEffect } from 'react';
import './App.css';

const mockData = [
  { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
  { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
  { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
  { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
  { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
];

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simular la carga inicial con timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProductos(mockData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  // Agregar un nuevo producto
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, { id: productos.length + 1, ...nuevoProducto }]);
  };

  return (
    <div className="App">
      <h1>Gestión de Productos</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <TablaProductos productos={productos} />
          <FormularioCarga onAgregarProducto={agregarProducto} />
        </>
      )}
    </div>
  );
}

// Tabla de productos
const TablaProductos = ({ productos }) => (
  <table className="tabla-productos">
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

// Formulario de carga
const FormularioCarga = ({ onAgregarProducto }) => {
  const [form, setForm] = useState({ nombre: "", precio: "", categoria: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nombre && form.precio && form.categoria) {
      onAgregarProducto({ ...form, precio: parseFloat(form.precio) });
      setForm({ nombre: "", precio: "", categoria: "" });
    }
  };

  return (
    <form className="formulario-carga" onSubmit={handleSubmit}>
      <h3>Agregar Producto</h3>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del producto"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={form.precio}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={form.categoria}
        onChange={handleChange}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

// Spinner de carga
const Spinner = () => (
  <div className="spinner">
    <div className="loading"></div>
    <p>Cargando...</p>
  </div>
);

export default App;
