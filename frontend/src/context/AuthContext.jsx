import { createContext, useContext, useState, useEffect } from "react";

import { registerService, loginService } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authErrors, setAuthErrors] = useState(null)

  const registerUser = async (data) => {
    setIsAuthenticated(false);
    setAuthErrors(null)

    try {
      const response = await registerService(
        data.username,
        data.email,
        data.password
      );
      
      if (response) {
        console.log('sussces', response?.data);
        setUser(response?.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log('errors', error?.response?.data);
      setAuthErrors(error?.response?.data);
    }
  };

  const singUp = async (data) => {
    setIsAuthenticated(false);
    setAuthErrors(null)

    try {
      const response = await loginService(
        data.email,
        data.password
      );
      
      if (response) {
        console.log('sussces', response?.data);
        setUser(response?.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log('errors', error?.response?.data);
      setAuthErrors(error?.response?.data);
    }
  };

  useEffect(() => {
    if (authErrors) {
      console.log('authErrors', authErrors);
      setTimeout(() => {
        setAuthErrors(null);
      }, 3000);
    }
  }, [authErrors]);

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        singUp,
        user,
        isAuthenticated,
        authErrors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
