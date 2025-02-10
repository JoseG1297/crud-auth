import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { store } from '../store/configureStore';


// Crear una instancia axios que agregue por default un header con el token de autenticacion, obtenido del redux store
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.authData?.user?.authToken;
    if (token) {
      config.headers.authToken = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
