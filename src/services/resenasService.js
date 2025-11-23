import axios from "axios";

const API_URL = "https://tesseract-of-games-backend.onrender.com/api/resenas";

export const obtenerReseñas = () => axios.get(API_URL);

export const obtenerReseñasPorJuego = (juegoId) =>
  axios.get(`${API_URL}/juego/${juegoId}`);

export const obtenerReseña = (id) =>
  axios.get(`${API_URL}/${id}`);

export const crearReseña = (data) =>
  axios.post(API_URL, data);

export const actualizarReseña = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const eliminarReseña = (id) =>
  axios.delete(`${API_URL}/${id}`);