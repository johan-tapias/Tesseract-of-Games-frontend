import { Link } from "react-router-dom";
import "./../styles/componentes.css";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a GameTracker</h1>
          <p>
            Tu biblioteca personal de videojuegos. Registra tus juegos, 
            tus horas jugadas y crea reseñas como un verdadero gamer.
          </p>

          <div className="hero-buttons">
            <Link to="/biblioteca" className="btn-hero">
              Ver Biblioteca
            </Link>

            <Link to="/reseñas" className="btn-hero-sec">
              Ver Más
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN CARACTERÍSTICAS */}
      <section className="seccion">
        <h2>Funciones Principales</h2>

        <ul className="lista-funciones">
          <li>Ver tu biblioteca con portadas</li>
          <li>Agregar y editar videojuegos</li>
          <li>Marcar juegos como completados</li>
          <li>Puntuación con estrellas</li>
          <li>Escribir reseñas detalladas</li>
          <li>Registrar horas jugadas</li>
        </ul>
      </section>

      {/* SECCIÓN VISTAS */}
      <section className="seccion">
        <h2>Vistas del Sistema</h2>

        <div className="vistas-grid">
          <div className="vista-card">Biblioteca de Juegos</div>
          <div className="vista-card">Tarjeta de Juego</div>
          <div className="vista-card">Formulario de Juegos</div>
          <div className="vista-card">Lista de Reseñas</div>
          <div className="vista-card">Formulario de Reseñas</div>
          <div className="vista-card">Estadísticas Personales</div>
        </div>
      </section>

    </div>
  );
}