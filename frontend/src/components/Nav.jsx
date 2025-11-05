import { useNavigate } from "react-router-dom";
import passaBola from "../assets/passaBola_3x1fundo.png";
import { useAuth } from "../components/AuthContext";

const Nav = () => {
  const navigate = useNavigate();
  const { user, logout, openLoginModal, openRegisterModal } = useAuth();
  const handleLogout = () => {
    logout(); // Realiza o logout
    navigate("/"); // Navega para a página principal
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      <div className="flex items-center space-x-2 cursor-pointer">
        <img
          src={passaBola}
          alt="Passa a Bola"
          className="w-50"
          onClick={() => navigate("/")}
        />
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#funcionalidades" className="font-semibold text-[#8b5cf6] hover:text-black transition">
          Funcionalidades
        </a>
        <a href="#beneficios" className="font-semibold text-[#8b5cf6] hover:text-black transition">
          Benefícios
        </a>
        <a href="#footer" className="font-semibold text-[#8b5cf6] hover:text-black transition">
          Contato
        </a>
      </nav>

      <div className="flex items-center space-x-3">
        {!user ? (
          <>
            <button
              onClick={openLoginModal}
              className="px-4 py-1 border border-purple-600 rounded-md text-purple-600 hover:bg-[#4C1D8F] hover:text-white transition cursor-pointer"
            >
              Entrar
            </button>
            <button
              onClick={openRegisterModal}
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
              onClick={handleLogout}
              className="px-3 py-1 border border-pink-500 text-pink-500 rounded hover:bg-pink-500 hover:text-white transition cursor-pointer"
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
