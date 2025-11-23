import { useState, useEffect } from "react";
import {
  crearReseña,
  obtenerReseña,
  actualizarReseña,
} from "../services/resenasService";
import { obtenerJuegos } from "../services/juegosService";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/componentes.css";

export default function FormularioReseña() {
  const [juegos, setJuegos] = useState([]);
  const [form, setForm] = useState({
    juegoId: "",
    puntuacion: 1,
    textoReseña: "",
    horasJugadas: 0,
    dificultad: "Normal",
    recomendaria: false,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerJuegos().then((res) => setJuegos(res.data));

    if (id) {
      obtenerReseña(id).then((res) => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await actualizarReseña(id, form);
    } else {
      await crearReseña(form);
    }
    navigate("/reseñas");
  };

  return (
    <div className="form-container">

      <h1 className="form-title">
        {id ? "Editar Reseña" : "Nueva Reseña"}
      </h1>

      <form className="form-card reseña-form" onSubmit={handleSubmit}>

        <label>Juego</label>
        <select
          name="juegoId"
          value={form.juegoId}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un juego</option>
          {juegos.map((j) => (
            <option key={j._id} value={j._id}>
              {j.titulo}
            </option>
          ))}
        </select>

        <label>Puntuación (1-5 estrellas)</label>
        <input
          type="number"
          name="puntuacion"
          min="1"
          max="5"
          value={form.puntuacion}
          onChange={handleChange}
          required
        />

        <label>Texto de la reseña</label>
        <textarea
          name="textoReseña"
          value={form.textoReseña}
          onChange={handleChange}
          rows="5"
          placeholder="Escribe tu opinión sobre el juego..."
        />

        <label>Horas Jugadas</label>
        <input
          type="number"
          name="horasJugadas"
          value={form.horasJugadas}
          onChange={handleChange}
        />

        <label>Dificultad</label>
        <select
          name="dificultad"
          value={form.dificultad}
          onChange={handleChange}
        >
          <option value="Fácil">Fácil</option>
          <option value="Normal">Normal</option>
          <option value="Difícil">Difícil</option>
        </select>

        <label className="check-label">
          <input
            type="checkbox"
            name="recomendaria"
            checked={form.recomendaria}
            onChange={handleChange}
          />
          ¿Recomendarías este juego?
        </label>

        <button className="btn-submit" type="submit">
          Guardar Reseña
        </button>
      </form>
    </div>
  );
}