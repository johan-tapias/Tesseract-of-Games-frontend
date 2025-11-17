import { useEffect, useState } from "react";
import { obtenerJuegos } from "../services/juegosService";
import { obtenerReseñas } from "../services/reseñasService";

export default function EstadisticasPersonales() {
  const [juegos, setJuegos] = useState([]);
  const [reseñas, setReseñas] = useState([]);

  useEffect(() => {
    obtenerJuegos().then(res => setJuegos(res.data));
    obtenerReseñas().then(res => setReseñas(res.data));
  }, []);

  if (juegos.length === 0) {
    return <p>No hay datos suficientes para estadísticas.</p>;
  }

  // Estadísticas básicas
  const totalJuegos = juegos.length;
  const juegosCompletados = juegos.filter(j => j.completado).length;

  // Estadísticas desde reseñas
  const totalHoras = reseñas.reduce((sum, r) => sum + (r.horasJugadas || 0), 0);
  const promedioPuntuacion = reseñas.length > 0 
    ? (reseñas.reduce((sum, r) => sum + r.puntuacion, 0) / reseñas.length).toFixed(1)
    : 0;

  // Juegos por género
  const juegosPorGenero = juegos.reduce((acc, j) => {
    acc[j.genero] = (acc[j.genero] || 0) + 1;
    return acc;
  }, {});

  // Juegos por plataforma
  const juegosPorPlataforma = juegos.reduce((acc, j) => {
    acc[j.plataforma] = (acc[j.plataforma] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Estadísticas Personales</h2>

      <h3>Resumen General</h3>
      <p>Total de juegos: {totalJuegos}</p>
      <p>Juegos completados: {juegosCompletados}</p>

      <h3>Progreso y Actividad</h3>
      <p>Horas jugadas totales: {totalHoras}</p>
      <p>Puntuación promedio: {promedioPuntuacion}/5</p>

      <h3>Distribución por Género</h3>
      <ul>
        {Object.keys(juegosPorGenero).map(g => (
          <li key={g}>{g}: {juegosPorGenero[g]}</li>
        ))}
      </ul>

      <h3>Distribución por Plataforma</h3>
      <ul>
        {Object.keys(juegosPorPlataforma).map(p => (
          <li key={p}>{p}: {juegosPorPlataforma[p]}</li>
        ))}
      </ul>
    </div>
  );
}