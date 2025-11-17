import { useEffect, useState } from "react";
import { obtenerReseñas, eliminarReseña } from "../services/reseñasService";
import { Link } from "react-router-dom";
import "./../styles/componentes.css";

export default function ListaReseñas() {
  const [reseñas, setReseñas] = useState([]);

  const cargarReseñas = () => {
    obtenerReseñas().then((res) => setReseñas(res.data));
  };

  useEffect(() => {
    cargarReseñas();
  }, []);

  const borrar = async (id) => {
    await eliminarReseña(id);
    cargarReseñas();
  };

  return (
    <div className="lista-reseñas">

      <h1 className="titulo-pagina">Reseñas</h1>

      <div className="actions-top">
        <Link to="/nueva-reseña" className="btn-agregar-reseña">+ Nueva Reseña</Link>
      </div>

      {reseñas.length === 0 && (
        <p className="sin-juegos">No hay reseñas todavía.</p>
      )}

      <div className="reseñas-grid">
        {reseñas.map((r) => (
          <div key={r._id} className="reseña-card-grande">

            <div className="reseña-header-grande">
              <span className="puntuacion-grande">{r.puntuacion}⭐</span>
              <span className="horas">{r.horasJugadas} hrs</span>
            </div>

            <p className="reseña-texto">{r.textoReseña}</p>

            <div className="reseña-footer-grande">
              <span className="dificultad">{r.dificultad}</span>
              <span className={r.recomendaria ? "recomienda si" : "recomienda no"}>
                {r.recomendaria ? "Recomendado" : "No recomendado"}
              </span>
            </div>

            <div className="reseña-botones">
              <Link to={`/editar-reseña/${r._id}`} className="btn-card yellow">Editar</Link>
              <button onClick={() => borrar(r._id)} className="btn-card red">Eliminar</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}