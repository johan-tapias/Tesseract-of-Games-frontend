import { useEffect, useState } from "react";
import { obtenerJuego } from "../services/juegosService";
import { obtenerReseñasPorJuego } from "../services/reseñasService";
import { useParams, Link } from "react-router-dom";
import "./../styles/componentes.css";

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
    <div className="detalle-juego">

      {/* BANNER */}
      <div className="detalle-banner">
        <img src={juego.imagenPortada} alt={juego.titulo} />
        <div className="banner-overlay">
          <h1>{juego.titulo}</h1>
          <p><strong>{juego.genero} • {juego.plataforma}</strong></p>
        </div>
      </div>

      {/* INFO PRINCIPAL */}
      <div className="detalle-info">

        <div className="info-col">
          <h2>Descripción</h2>
          <p>{juego.descripcion}</p>

          <div className="info-extra">
            <p><strong>Año:</strong> {juego.añoLanzamiento}</p>
            <p><strong>Desarrollador:</strong> {juego.desarrollador}</p>
            <p><strong>Completado:</strong> {juego.completado ? "Sí" : "No"}</p>
          </div>

          <div className="detalle-botones">
            <Link to={`/editar/${juego._id}`} className="btn-detalle yellow">Editar Juego</Link>
            <Link to={`/nueva-reseña`} className="btn-detalle blue">
              Agregar Reseña
            </Link>
          </div>
        </div>

      </div>

      {/* RESEÑAS */}
      <div className="detalle-reseñas">
        <h2>Reseñas del Juego</h2>

        {reseñas.length === 0 && (
          <p className="sin-juegos"><strong>Este juego no tiene reseñas aún.</strong></p>
        )}

        <div className="reseñas-lista">
          {reseñas.map(r => (
            <div key={r._id} className="reseña-card">
              <div className="reseña-header">
                <span className="puntuacion">{r.puntuacion}⭐</span>
                <span className="horas">{r.horasJugadas} hrs</span>
              </div>

              <p className="reseña-texto">{r.textoReseña}</p>

              <div className="reseña-footer">
                <span className="dificultad">{r.dificultad}</span>
                <span className={r.recomendaria ? "recomienda si" : "recomienda no"}>
                  {r.recomendaria ? "Recomendado" : "No recomendado"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}