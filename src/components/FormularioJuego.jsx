import { useState } from "react";
import { crearJuego } from "../services/juegosService";
import { useNavigate } from "react-router-dom";

export default function FormularioJuego() {
  const [form, setForm] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    añoLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
    descripcion: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearJuego(form);
    navigate("/biblioteca");
  };

  return (
    <div>
      <h2>Agregar Juego</h2>

      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título" onChange={handleChange} />
        <input name="genero" placeholder="Género" onChange={handleChange} />
        <input name="plataforma" placeholder="Plataforma" onChange={handleChange} />
        <input name="añoLanzamiento" placeholder="Año" onChange={handleChange} />
        <input name="desarrollador" placeholder="Desarrollador" onChange={handleChange} />
        <input name="imagenPortada" placeholder="URL de imagen" onChange={handleChange} />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          onChange={handleChange}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}