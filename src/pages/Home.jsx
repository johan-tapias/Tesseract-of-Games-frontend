import { Link } from "react-router-dom";
import "./../styles/componentes.css";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        {/* VIDEO DE FONDO */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/hero-cod.mp4" type="video/mp4" />
        </video>

        {/* OSCURECEDOR PARA QUE EL TEXTO SE LEA */}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="titulo-pagina" >Bienvenido a Tesseract of Games</h1>
        
          <div className="hero-buttons">
            <Link to="/biblioteca" className="btn-hero">
              Ver Biblioteca
            </Link>

            <Link to="/reseñas" className="btn-hero-sec">
              Ver reseñas
            </Link>
          </div>
          
        </div>
      </section>

      <section className="seccion-destacada">
  
  {/* IMAGEN IZQUIERDA */}
  <div className="destacada-img">
    <img src="/img/soldado-halo.png" alt="soldado" />
  </div>

  {/* TEXTO A LA DERECHA */}
  <div className="destacada-texto">
    <h2 className="frase-impacto">
      DOMINA TU MUNDO GAMER
    </h2>
    <p>Registra, organiza y controla toda tu colección.</p>
    
  <div className="div-btn">
    <Link to="/nuevo-juego" className="btn-agregar">
          Agregar Juego
        </Link>
  </div>
  </div>
    
</section>


      <section className="plataformas-section">
        <h2 className="plataformas-titulo">
          Registra los juegos de tus plataformas favoritas
        </h2>

        <div className="plataformas-orbita">
          <img src="/logos/xbox.PNG" className="logo-plataforma orbita-1" />
          <img
            src="/logos/playstation.PNG"
            className="logo-plataforma orbita-2"
          />
          <img
            src="/logos/activision.PNG"
            className="logo-plataforma orbita-6"
          />
          <img src="/logos/nintendo.PNG" className="logo-plataforma orbita-3" />
          <img src="/logos/steam.PNG" className="logo-plataforma orbita-4" />
          <img src="/logos/epic.png" className="logo-plataforma orbita-5" />
        </div>
      </section>

      {/* SECCIÓN CARACTERÍSTICAS */}
      <section className="seccion">
        <section className="seccion-img">
          <ul className="lista-funciones">
            <h2>Funciones Principales</h2>
            <li>Ver tu colección de juegos con portadas</li>
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
      <section className="seccion-vista-sistema">
        <h2>Vistas del Sistema</h2>

        <div className="vistas-grid">
          <div className="vista-card">Biblioteca de Juegos</div>
          <div className="vista-card">Detalles de los Juegos</div>
          <div className="vista-card">Reseñas</div>
          <div className="vista-card">Estadísticas Personales</div>
        </div>
      </section>
    </div>
  );
}
