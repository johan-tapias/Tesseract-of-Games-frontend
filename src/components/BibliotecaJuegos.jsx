import { useEffect, useState } from "react";
import { obtenerJuegos, eliminarJuego } from "../services/juegosService";
import { Link } from "react-router-dom";
import "./../styles/componentes.css";

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
    <div className="biblioteca">

      <h1 className="titulo-pagina">Mi Biblioteca</h1>

      {juegos.length === 0 && (
        <p className="sin-juegos">No hay juegos aún. Agrega uno para empezar.</p>
      )}

      <div className="grid-juegos">
        {juegos.map(juego => (
          <div key={juego._id} className="juego-card">

            <div className="card-img-container">
              <img
                src={juego.imagenPortada || "https://via.placeholder.com/300"}
                alt={juego.titulo}
              />
            </div>

            <div className="card-info">
              <h3>{juego.titulo}</h3>
              <p className="card-detalle">{juego.genero} • {juego.plataforma}</p>

              <div className="card-botones">
                <Link to={`/juego/${juego._id}`} className="btn-card blue">Ver</Link>
                <Link to={`/editar/${juego._id}`} className="btn-card yellow">Editar</Link>
                <button onClick={() => borrar(juego._id)} className="btn-card red">Eliminar</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}