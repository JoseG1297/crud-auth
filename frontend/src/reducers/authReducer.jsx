import { useDispatch, useSelector } from "react-redux";

import { registerService, loginService } from "../api/auth";

import { setAuthData, clearAuthData, setAuthErrors } from "../slice/authSlice";

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
        setAuthDataReducer(response?.data);
      }
    } catch (error) {
      setAuthErrorsReducer(error?.response?.data);
    }
  };

  const singUp = async (data) => {
    try {
      const response = await loginService(data.email, data.password);

      if (response) {
        setAuthDataReducer(response?.data);
      }
    } catch (error) {
      setAuthErrorsReducer(error?.response?.data);
    }
  };

  const setAuthDataReducer = (data) => {
    dispatch(setAuthData(data));
    console.log("AuthData", data);
  };

  const logoutReducer = () => {
    dispatch(clearAuthData());
    console.log("logout");
  };

  const setAuthErrorsReducer = (errors) => {
    dispatch(setAuthErrors(errors));
    console.log("errors", errors);
  };

  const errors = useSelector((state) => state.authData.errors);
  const authData = useSelector((state) => state.authData);
  const isAuthenticated = useSelector(
    (state) => state.authData.isAuthenticated
  );

  return {
    registerUser,
    singUp,
    logoutReducer,
    setAuthErrorsReducer,
    errors,
    authData,
    isAuthenticated,
  };
};
