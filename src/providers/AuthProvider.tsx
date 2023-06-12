import React, { useState } from "react";

interface AuthContext {
  isLoggedIn: boolean;
  login: () => void;
}

const AuthContext = React.createContext<AuthContext>({
  isLoggedIn: false,
  login: () => undefined,
});

export const useAuth = () => React.useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const login = () => {
    localStorage.setItem("token", "1234");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
