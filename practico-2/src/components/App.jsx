import { useState, useEffect } from "react";
import Tabla from "./Tabla";
import Formulario from "./Formulario";
import Spinner from "./Spinner";
import "../Styles/App.css";

const App = () => {
  const mockData = [
    { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
    { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
    { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
    { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
    { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" },
  ];

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProductos(mockData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <div className="app">
      <h1>Lista de Productos</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Tabla productos={productos} />
          <Formulario onAgregar={agregarProducto} />
        </>
      )}
    </div>
  );
};

export default App;
