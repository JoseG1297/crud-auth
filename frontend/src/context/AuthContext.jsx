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

  const singUp = async (data) => {
    try {
      const response = await registerService(
        data.username,
        data.email,
        data.password
      );
      if (response) {
        setUser(response?.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        singUp,
        user,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
