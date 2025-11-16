import { useEffect, useState } from "react";
import { obtenerJuegos } from "../services/juegosService";

export default function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    obtenerJuegos().then(res => setJuegos(res.data));
  }, []);

  return (
    <div>
      <h2>Biblioteca de Juegos</h2>

      {juegos.length === 0 && <p>No hay juegos aún.</p>}

      <ul>
        {juegos.map(juego => (
          <li key={juego._id}>{juego.titulo}</li>
        ))}
      </ul>
    </div>
  );
}