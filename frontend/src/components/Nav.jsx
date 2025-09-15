import { Link } from "react-router-dom"
import { useState } from "react"
import passaBola from "../assets/passaBola_3x1fundo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      {/* Logo + título */}
      <div className="flex items-center space-x-2">
        <img
          src={passaBola}
          alt="Passa a Bola"
          className="w-50"
        />
      </div>

        <nav className="hidden md:flex items-center gap-8">
          <a onClick={() => navigate("/#funcionalidades")} href="#funcionalidades" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors cursor-pointer">
            Funcionalidades
          </a>
          <a onClick={() => navigate("/#beneficios")} href="#beneficios" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors cursor-pointer">
            Benefícios
          </a>
          <a onClick={() => navigate("/#footer")} href="#footer" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors cursor-pointer">
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-3">
        <button className="px-4 py-1 border border-purple-600 rounded-md text-purple-600 hover:bg-[#4C1D8F] hover:text-white cursor-pointer transition">
          Entrar
        </button>
        <button className="px-4 py-1 rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-80 cursor-pointer transition">
          Cadastrar
        </button>
      </div>
    </nav>
  )
}

export default Nav