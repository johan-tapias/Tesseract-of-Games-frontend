import { useEffect, useState } from "react";
import { obtenerJuegos, eliminarJuego } from "../services/juegosService";
import { Link } from "react-router-dom";

export default function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);

  const cargarJuegos = () => {
    obtenerJuegos().then(res => setJuegos(res.data));
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  const borrar = async (id) => {
    await eliminarJuego(id);
    cargarJuegos();
  };

  return (
    <div>
      <h2>Biblioteca de Juegos</h2>

      <Link to="/nuevo-juego">Agregar nuevo juego</Link>

      {juegos.length === 0 && <p>No hay juegos aún.</p>}

      <ul>
        {juegos.map(juego => (
          <li key={juego._id}>
            {juego.titulo}
            {" - "}
            <Link to={`/juego/${juego._id}`}>Ver más</Link>
            {" | "}
            <Link to={`/editar/${juego._id}`}>Editar</Link>
            {" | "}
            <button onClick={() => borrar(juego._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}