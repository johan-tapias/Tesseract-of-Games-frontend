import { useEffect, useState } from "react";
import { obtenerJuegos, eliminarJuego } from "../services/juegosService";
import { Link } from "react-router-dom";
import "./../styles/componentes.css";

export default function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);

  const cargarJuegos = () => {
    obtenerJuegos().then((res) => setJuegos(res.data));
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  const borrar = async (id) => {
    await eliminarJuego(id);
    cargarJuegos();
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este juego? Esta acción no se puede deshacer."
    );

    if (!confirmar) return;

    try {
      await borrar(id);
      window.location.reload(); // o navigate("/biblioteca") si usas react-router
    } catch (error) {
      console.error("Error eliminando juego:", error);
    }
  };

  const [mostrarModal, setMostrarModal] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);

  const abrirModal = (id) => {
    setIdAEliminar(id);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setIdAEliminar(null);
  };

  const confirmarEliminacion = async () => {
    try {
      await borrar(idAEliminar);
      cerrarModal();
      window.location.reload(); // o navigate("/biblioteca")
    } catch (error) {
      console.error("Error eliminando juego:", error);
    }
  };
  // Estados de filtros
  const [busqueda, setBusqueda] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("");
  const [filtroPlataforma, setFiltroPlataforma] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  // Listas únicas
  const generos = [...new Set(juegos.map((j) => j.genero))];
  const plataformas = [...new Set(juegos.map((j) => j.plataforma))];

  // Filtro principal
  const juegosFiltrados = juegos.filter((j) => {
    const coincideBusqueda = j.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideGenero = filtroGenero ? j.genero === filtroGenero : true;
    const coincidePlataforma = filtroPlataforma
      ? j.plataforma === filtroPlataforma
      : true;
    const coincideEstado = filtroEstado
      ? filtroEstado === "completado"
        ? j.completado === true
        : j.completado === false
      : true;

    return (
      coincideBusqueda && coincideGenero && coincidePlataforma && coincideEstado
    );
  });

  return (
    <div className="biblioteca">
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Confirmar Eliminación</h2>
            <p>
              ¿Seguro que deseas eliminar este juego? Esta acción no se puede
              deshacer.
            </p>

            <div className="modal-buttons">
              <button className="btn cancelar" onClick={cerrarModal}>
                Cancelar
              </button>
              <button className="btn eliminar" onClick={confirmarEliminacion}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="titulo-pagina">Mi Biblioteca</h1>

      <div className="filtros-bar">
        <input
          type="text"
          placeholder="Buscar..."
          className="filtro-buscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          className="filtro-select"
          value={filtroGenero}
          onChange={(e) => setFiltroGenero(e.target.value)}
        >
          <option value="">Género</option>
          {generos.map((g, i) => (
            <option key={i} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          className="filtro-select"
          value={filtroPlataforma}
          onChange={(e) => setFiltroPlataforma(e.target.value)}
        >
          <option value="">Plataforma</option>
          {plataformas.map((p, i) => (
            <option key={i} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          className="filtro-select"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
        >
          <option value="">Estado</option>
          <option value="completado">Completados</option>
          <option value="pendiente">Pendientes</option>
        </select>
        <button
          className="btn-card limpiar"
          onClick={() => {
            setBusqueda("");
            setFiltroGenero("");
            setFiltroPlataforma("");
            setFiltroEstado("");
          }}
        >
          Limpiar
        </button>
      </div>

      {juegos.length === 0 && (
        <p className="sin-juegos">
          No hay juegos aún. Agrega uno para empezar.
        </p>
      )}

      <div className="grid-juegos">
        {juegosFiltrados.map((juego) => (
          <div key={juego._id} className="juego-card">
            <div className="card-img-container">
              <img
                src={juego.imagenPortada || "https://via.placeholder.com/300"}
                alt={juego.titulo}
              />
            </div>

            <div className="card-info">
              <h3>{juego.titulo}</h3>
              <p className="card-detalle">
                {juego.genero} • {juego.plataforma}
              </p>

              <div className="card-botones">
                <Link to={`/juego/${juego._id}`} className="btn-card blue">
                  Ver
                </Link>
                <Link to={`/editar/${juego._id}`} className="btn-card yellow">
                  Editar
                </Link>
                <button
                  onClick={() => abrirModal(juego._id)}
                  className="btn-card red"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
