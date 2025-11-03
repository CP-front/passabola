import { createContext, useContext, useState, useEffect } from "react";
import ModalLogin from "./ModalLogin";
import RegisterModal from "./Modal";
import SuccessModal from "./SucessModal";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [modalType, setModalType] = useState("login"); // login | register
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modais de sucesso globais
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successColor, setSuccessColor] = useState("purple");

  // Carregar usuário salvo
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // LOGIN
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthenticated(true);
    setSuccessMessage("Login realizado com sucesso!");
    setSuccessColor("purple");
    setShowSuccess(true);
    setIsModalOpen(false);
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  // CADASTRO
  const register = (userData) => {
    setUser(null);
    localStorage.setItem("user", JSON.stringify(userData));
    setSuccessMessage("Cadastro realizado! Faça login para continuar.");
    setSuccessColor("pink");
    setShowSuccess(true);
    setIsModalOpen(false);
  };

  // Abrir modais
  const openLoginModal = () => {
    setModalType("login");
    setIsModalOpen(true);
  };

  const openRegisterModal = () => {
    setModalType("register");
    setIsModalOpen(true);
  };

  // Fechar modal genérico
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
        openLoginModal,
        openRegisterModal,
      }}
    >
      {children}

      {/* Modal de Login / Cadastro */}
      {modalType === "login" ? (
        <ModalLogin
          isOpen={isModalOpen}
          onClose={closeModal}
          setModalType={setModalType}
        />
      ) : (
        <RegisterModal
          isOpen={isModalOpen}
          onClose={closeModal}
          setModalType={setModalType}
        />
      )}

      {/* Modal de sucesso global */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message={successMessage}
        color={successColor}
      />
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
