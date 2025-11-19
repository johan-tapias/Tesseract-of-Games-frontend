import { Link } from "react-router-dom";
import "./../styles/componentes.css";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        {/* VIDEO DE FONDO */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* OSCURECEDOR PARA QUE EL TEXTO SE LEA */}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Bienvenido a GameTracker</h1>
          <p>
            Tu biblioteca personal de videojuegos. Registra tus juegos, tus
            horas jugadas y crea reseñas como un verdadero gamer.
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


<section className="seccion-img">




   <div className="img-soldado">
            <img src="/img/soldado.png" alt="soldado" />
          </div>
</section>



      <section className="plataformas-section">
        <h2 className="plataformas-titulo">
          Registra los juegos de tus plataformas favoritas
        </h2>

        <div className="plataformas-orbita">
          <img src="/logos/xbox.jpg" className="logo-plataforma orbita-1" />
          <img
            src="/logos/playstation.jpg"
            className="logo-plataforma orbita-2"
          />
          <img
            src="/logos/playstation.jpg"
            className="logo-plataforma orbita-6"
          />
          <img src="/logos/nintendo.jpg" className="logo-plataforma orbita-3" />
          <img src="/logos/steam.webp" className="logo-plataforma orbita-4" />
          <img src="/logos/epic.png" className="logo-plataforma orbita-5" />
        </div>
      </section>

      {/* SECCIÓN CARACTERÍSTICAS */}
      <section className="seccion">
        <section className="seccion-img">
          <ul className="lista-funciones">
            <h2>Funciones Principales</h2>
            <li>Ver tu biblioteca con portadas</li>
            <li>Agregar y editar videojuegos</li>
            <li>Marcar juegos como completados</li>
            <li>Puntuación con estrellas</li>
            <li>Escribir reseñas detalladas</li>
            <li>Registrar horas jugadas</li>
          </ul>
          <div className="img-soldado">
            <img src="/img/soldado.png" alt="soldado" />
          </div>
        </section>
      </section>

      {/* SECCIÓN VISTAS */}
      <section className="seccion2">
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
