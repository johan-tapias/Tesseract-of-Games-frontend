import axios from "axios";

const API_URL = "https://tesseract-of-games-backend.onrender.com/api/juegos";

export const obtenerJuegos = () => axios.get(API_URL);
export const obtenerJuego = (id) => axios.get(`${API_URL}/${id}`);
export const crearJuego = (data) => axios.post(API_URL, data);
export const actualizarJuego = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const eliminarJuego = (id) => axios.delete(`${API_URL}/${id}`);