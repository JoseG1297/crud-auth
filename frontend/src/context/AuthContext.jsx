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

  const singUp = async (data) => {
    let res = await registerService(
      data?.username,
      data?.email,
      data?.password
    );
    setUser(res?.data);
  };

  return (
    <AuthContext.Provider
      value={{
        singUp,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
