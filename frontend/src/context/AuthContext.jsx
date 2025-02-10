import { createContext, useContext, useState, useEffect } from "react";

import { useAuthReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const {
    registerUser,
    singUp,
    setAuthErrorsReducer,
    errors,
    isAuthenticated,
  } = useAuthReducer();

  useEffect(() => {
    if (errors) {
      console.log("authErrors", errors);
      const timer = setTimeout(() => {
        setAuthErrorsReducer(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        singUp,
        isAuthenticated,
        authErrors: errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
