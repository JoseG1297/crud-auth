import { createContext, useContext, useState } from "react";

import { registerService } from "../api/auth";

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
  const [registerErrors, setRegisterErrors] = useState(null)

  const singUp = async (data) => {
    setIsAuthenticated(false);
    setRegisterErrors(null)

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
      setRegisterErrors(error?.response?.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        singUp,
        user,
        isAuthenticated,
        registerErrors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
