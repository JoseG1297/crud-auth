import axios from "axios";

import { useAuthReducer } from "../reducers/authReducer";

// Crear una instancia axios que agregue por default un header con el token de autenticacion, obtenido del redux store
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const { authData } = useAuthReducer();
    const token = authData?.authToken;
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
