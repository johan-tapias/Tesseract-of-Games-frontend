import { useState, useEffect } from "react";
import { crearReseña, obtenerReseña, actualizarReseña } from "../services/reseñasService";
import { obtenerJuegos } from "../services/juegosService";
import { useNavigate, useParams } from "react-router-dom";

export default function FormularioReseña() {
  const [juegos, setJuegos] = useState([]);
  const [form, setForm] = useState({
    juegoId: "",
    puntuacion: 1,
    textoReseña: "",
    horasJugadas: 0,
    dificultad: "Normal",
    recomendaria: false
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerJuegos().then(res => setJuegos(res.data));

    if (id) {
      obtenerReseña(id).then(res => setForm(res.data));
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
    <div>
      <h2>{id ? "Editar Reseña" : "Nueva Reseña"}</h2>

      <form onSubmit={handleSubmit}>

        <label>Juego</label>
        <select name="juegoId" value={form.juegoId} onChange={handleChange}>
          <option value="">Seleccione un juego</option>
          {juegos.map(j => (
            <option key={j._id} value={j._id}>{j.titulo}</option>
          ))}
        </select>

        <label>Puntuación</label>
        <input
          type="number"
          name="puntuacion"
          min="1"
          max="5"
          value={form.puntuacion}
          onChange={handleChange}
        />

        <label>Texto de Reseña</label>
        <textarea
          name="textoReseña"
          value={form.textoReseña}
          onChange={handleChange}
        />

        <label>Horas Jugadas</label>
        <input
          type="number"
          name="horasJugadas"
          value={form.horasJugadas}
          onChange={handleChange}
        />

        <label>Dificultad</label>
        <select name="dificultad" value={form.dificultad} onChange={handleChange}>
          <option value="Fácil">Fácil</option>
          <option value="Normal">Normal</option>
          <option value="Difícil">Difícil</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="recomendaria"
            checked={form.recomendaria}
            onChange={handleChange}
          />
          ¿Recomendarías este juego?
        </label>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}