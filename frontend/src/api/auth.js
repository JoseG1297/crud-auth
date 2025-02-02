import axios from 'axios';

const apiRoot = 'localhost:3000/api/';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${apiRoot}/login`, { email, password });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const register = async (username, email, password) => {
    try {
        const response = await axios.post(`${apiRoot}/register`, { username, email, password });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}