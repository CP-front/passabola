import { Link } from "react-router-dom";
import { useState } from "react";
import passaBola from "../assets/passaBola_3x1fundo.png";
import { useNavigate } from "react-router-dom";
import AuthModal from "./Modal";
import LoginModal from "./ModalLogin";
<<<<<<< HEAD
import ModalWrapper from "./ModalWrapper"; // ✅ adicionado
import { useAuth } from "../context/AuthContext";
=======
import { useAuth } from "../components/AuthContext";
>>>>>>> 33a9b86364fc54698ba296798723a764422d1c44

const Nav = () => {  // esse é o nav.jsx
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login");

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={passaBola}
            alt="Passa a Bola"
            className="w-50"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#funcionalidades" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors cursor-pointer">
            Funcionalidades
          </a>
          <a href="#beneficios" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors cursor-pointer">
            Benefícios
          </a>
          <a href="#footer" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors cursor-pointer">
            Contato
          </a>
        </nav>

        {/* Autenticação */}
        <div className="flex items-center space-x-3">
          {!user ? (
            <>
              <button
                onClick={() => { setModalType("login"); setAuthModalOpen(true); }}
                className="px-4 py-1 border border-purple-600 rounded-md text-purple-600 hover:bg-[#4C1D8F] hover:text-white transition cursor-pointer"
              >
                Entrar
              </button>
              <button
                onClick={() => { setModalType("register"); setAuthModalOpen(true); }}
                className="px-4 py-1 rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-80 transition cursor-pointer"
              >
                Cadastrar
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="font-semibold text-purple-600">
                Olá, {user.nome.split(" ")[0]} 👋
              </span>
              <button
                onClick={logout}
                className="px-3 py-1 border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-white transition cursor-pointer"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ✅ Substitui os dois modais por um único wrapper */}
      {authModalOpen && (
        <ModalWrapper
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          setModalType={setModalType}
          modalType={modalType}
        />
      )}
    </>
  );
}

export default Nav;
