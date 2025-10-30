// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Carrega usuário do localStorage ao iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Faz login (salva usuário no estado e localStorage)
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log(`[Auth] Login realizado por: ${userData.nome}`);
  };

  // Faz logout (limpa estado e localStorage)
  const logout = () => {
    console.log(`[Auth] Usuário desconectado: ${user?.nome}`);
    setUser(null);
    localStorage.removeItem("user");
  };

  // Registra novo usuário
  const register = (userData) => {
    console.log(`[Auth] Novo usuário registrado: ${userData.nome} (${userData.email})`);
    login(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
