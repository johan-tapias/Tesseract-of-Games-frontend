import { Link } from "react-router-dom";
import "./../styles/componentes.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        {/* Espacio reservado para futuro logo */}
        <span className="logo-text">GameTracker</span>
      </div>

      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/biblioteca">Biblioteca</Link>
        <Link to="/reseñas">Reseñas</Link>
        <Link to="/estadisticas">Estadísticas</Link>
        <Link to="/nuevo-juego" className="btn-agregar">
          + Agregar Juego
        </Link>
      </nav>
    </header>
  );
}