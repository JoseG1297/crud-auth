import axiosInstance from "./axios";

const apiRoot = "http://localhost:3000/api";

export const loginService = async (email, password) => {
  const response = await axiosInstance.post(`${apiRoot}/login`, {
    email,
    password,
  });
  return response;
};

export const registerService = async (username, email, password) => {
  const response = await axiosInstance.post(`${apiRoot}/register`, {
    username,
    email,
    password,
  });
  return response;
};
