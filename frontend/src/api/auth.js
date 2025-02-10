import axiosInstance from "./axios";

export const loginService = async (email, password) => {
  const response = await axiosInstance.post(`/login`, {
    email,
    password,
  });
  return response;
};

export const registerService = async (username, email, password) => {
  const response = await axiosInstance.post(`/register`, {
    username,
    email,
    password,
  });
  return response;
};
