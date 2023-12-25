import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const signIn = () => {
    setLoggedIn(true);
  };

  const signOut = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContext;
};