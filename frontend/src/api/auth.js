import axios from 'axios';
import SweetAlert2 from 'sweetalert2';

const apiRoot = 'http://localhost:3000/api';

export const loginService = async (email, password) => {
    try {
        const response = await axios.post(`${apiRoot}/login`, { email, password });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const registerService = async (username, email, password) => {
    try {
        const response = await axios.post(`${apiRoot}/register`, { username, email, password });
        return response.data;
    } catch (error) {
        SweetAlert2.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message
        });
    }
}