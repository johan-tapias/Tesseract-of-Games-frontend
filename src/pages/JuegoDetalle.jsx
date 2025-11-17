import { useEffect, useState } from "react";
import { obtenerJuego } from "../services/juegosService";
import { obtenerReseñasPorJuego } from "../services/reseñasService";
import { useParams, Link } from "react-router-dom";

export default function JuegoDetalle() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [reseñas, setReseñas] = useState([]);

  useEffect(() => {
    obtenerJuego(id).then(res => setJuego(res.data));
    obtenerReseñasPorJuego(id).then(res => setReseñas(res.data));
  }, [id]);

  if (!juego) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{juego.titulo}</h1>

      <p>{juego.descripcion}</p>

      <Link to="/nueva-reseña">Agregar reseña</Link>

      <h3>Reseñas</h3>

      {reseñas.length === 0 && <p>No hay reseñas aún.</p>}

      <ul>
        {reseñas.map(r => (
          <li key={r._id}>
            {r.puntuacion}⭐ — {r.textoReseña}
          </li>
        ))}
      </ul>
    </div>
  );
}