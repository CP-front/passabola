import React, { createContext, useContext, useState, useEffect } from 'react';

// Importe seu componente ModalLogin
// O caminho pode ser diferente no seu projeto.
import ModalLogin from '../components/ModalLogin'; 

// 1. Criar o Contexto
const AuthContext = createContext();

// 2. Criar o Provedor (Provider)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Armazena dados do usuário (null = deslogado)
  const [loading, setLoading] = useState(true); // Para checar o login inicial
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Efeito para checar se o usuário já está logado (ex: por um token no localStorage)
  // Isso impede que o usuário seja deslogado ao recarregar a página
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Tente buscar o token do localStorage
        const token = localStorage.getItem('authToken');
        if (token) {
          // **API REAL (Exemplo):**
          // const response = await fetch('/api/v1/auth/me', {
          //   headers: { 'Authorization': `Bearer ${token}` }
          // });
          // const userData = await response.json();
          // if (response.ok) {
          //   setUser(userData);
          // } else {
          //   localStorage.removeItem('authToken');
          // }

          // **SIMULAÇÃO (para este exemplo):**
          // Vamos fingir que o token é válido e buscamos o usuário
          const mockUser = { id: 1, name: "Usuário Exemplo", email: "user@passabola.com" };
          setUser(mockUser);
        }
      } catch (error) {
        console.error("Falha ao checar autenticação", error);
        localStorage.removeItem('authToken');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // --- Funções do Modal ---
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  // --- Funções de Autenticação ---

  // Função de Login (Simulada)
  const login = async (email, password) => {
    try {
      // **API REAL (Exemplo):**
      // const response = await fetch('/api/v1/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message);
      // setUser(data.user);
      // localStorage.setItem('authToken', data.token);

      // **SIMULAÇÃO (para este exemplo):**
      console.log("Simulando login com:", email, password);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simula delay da API
      const mockUser = { id: 1, name: "Usuário Logado", email: email };
      setUser(mockUser);
      localStorage.setItem('authToken', 'meu-token-falso'); // Simula token
      
      closeLoginModal(); // Fecha o modal ao logar
      return true;

    } catch (error) {
      console.error("Falha no login:", error);
      return false;
    }
  };

  // Função de Logout (Simulada)
  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    // Você pode querer navegar o usuário para a home aqui
  };

  // 3. Montar o valor que será fornecido
  const value = {
    user,
    isAuthenticated: !!user, // Converte 'user' em um booleano (true se logado, false se null)
    loading,
    login,
    logout,
    openLoginModal,
    closeLoginModal
  };

  // 4. Retornar o Provedor
  return (
    <AuthContext.Provider value={value}>
      {/* Não renderiza o app até a checagem inicial de auth terminar */}
      {!loading && children}
      
      {/* O Modal "vive" aqui, globalmente, e é controlado pelo estado do provider */}
      <ModalLogin 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
      />
    </AuthContext.Provider>
  );
};

// 5. Criar e exportar o Hook customizado
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};