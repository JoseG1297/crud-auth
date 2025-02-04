import axios from "axios";

const apiRoot = "http://localhost:3000/api";

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(`${apiRoot}/login`, { email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerService = async (username, email, password) => {
  const response = await axios.post(`${apiRoot}/register`, {
    username,
    email,
    password,
  });
  return response;
};
