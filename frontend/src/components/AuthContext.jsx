// src/context/ContextoAuth.jsx
// (ou AuthContext.jsx, use o nome do seu arquivo)

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

// --- 1. IMPORTAR O SEU MODAL DE LOGIN ---
// (Ajuste o caminho se o seu AuthModal.jsx estiver em outro lugar)
import AuthModal from "../components/ModalLogin";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // --- 2. ADICIONAR ESTADO PARA CONTROLAR O MODAL ---
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Carrega usuário do localStorage ao iniciar

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // --- 3. ADICIONAR FUNÇÕES PARA O MODAL (com useCallback) ---
  const openLoginModal = useCallback(() => setIsLoginModalOpen(true), []);
  const closeLoginModal = useCallback(() => setIsLoginModalOpen(false), []); // Faz login (salva usuário no estado e localStorage)

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log(`[Auth] Login realizado por: ${userData.nome}`);

    // --- 4. FECHAR O MODAL APÓS O LOGIN ---
    closeLoginModal();
  }; // Faz logout (limpa estado e localStorage)

  const logout = () => {
    console.log(`[Auth] Usuário desconectado: ${user?.nome}`);
    setUser(null);
    localStorage.removeItem("user");
  }; // Registra novo usuário

  const register = (userData) => {
    console.log(
      `[Auth] Novo usuário registrado: ${userData.nome} (${userData.email})`
    );
    login(userData); // A função login() já salva e fecha o modal
  };

  // --- 5. ATUALIZAR O 'VALUE' FORNECIDO PELO CONTEXTO ---
  const value = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user, // <-- O que faltava para Home.jsx
    openLoginModal, // <-- O que faltava para Home.jsx
    closeLoginModal, // <-- Para o próprio modal usar
  };

  return (
    // Use o 'value' que criamos
    <AuthContext.Provider value={value}>
              {children}
      {/* --- 6. RENDERIZAR O MODAL AQUI --- */}
      {/* O Modal agora "vive" aqui. 
        O AuthProvider controla quando ele está aberto (isOpen)
        e o que acontece quando ele pede para fechar (onClose).
      */}
      <AuthModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />   {" "}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
