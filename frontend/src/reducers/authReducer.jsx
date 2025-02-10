import { useDispatch, useSelector } from 'react-redux';

import { registerService, loginService } from '../api/auth';

import { setAuthData, clearAuthData, setAuthErrors } from '../slice/authSlice';

export const useAuthReducer = () => {
    const dispatch = useDispatch();
    
    const registerUser = async (data) => {
        try {
        const response = await registerService(
            data.username,
            data.email,
            data.password
        );
    
        if (response) {
            console.log('sussces', response?.data);
            dispatch(setAuthData(response?.data));
        }
        } catch (error) {
            console.log('errors', error?.response?.data);
            authErrors(error?.response?.data);
        }
    };
    
    const singUp = async (data) => {
        try {
        const response = await loginService(
            data.email,
            data.password
        );
    
        if (response) {
            console.log('sussces', response?.data);
            dispatch(setAuthData(response?.data));
        }
        } catch (error) {
            authErrors(error?.response?.data);
        console.log('errors', error?.response?.data);
        }
    };
    const logout = () => {
        dispatch(clearAuthData());
    };
    
    const authErrors = (errors) => {
        dispatch(setAuthErrors(errors));
    }
    

    const errors = useSelector((state) => state.authData.errors);
    const authData = useSelector((state) => state.authData);
    const isAuthenticated = useSelector((state) => state.authData.isAuthenticated);


    return {
        registerUser,
        singUp,
        logout,
        authErrors,
        errors,
        authData,
        isAuthenticated,
    };
};