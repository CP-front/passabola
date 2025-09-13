import { Link } from "react-router-dom"
import { useState } from "react"
<<<<<<< HEAD
import passaBola from "../assets/passaBola_3x1fundo.png";
=======
import logo from "../assets/passaBola_3x1.png";

>>>>>>> 9329fc1275b06a722646ff0b14c3b9a92d984849

const Nav = () => {

  return (
<<<<<<< HEAD
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      {/* Logo + título */}
      <div className="flex items-center space-x-2">
        <img
          src={passaBola}
          alt="Passa a Bola"
          className="w-50"
        />
=======
    <header className="bg-white border-b border-[#d9d9d9] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Passa a Bola" className="h-23 w-auto"></img>
        </div>
>>>>>>> 9329fc1275b06a722646ff0b14c3b9a92d984849
      </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#funcionalidades" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors">
            Funcionalidades
          </a>
          <a href="#sobre" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors">
            Benefícios
          </a>
          <a href="#contato" className="font-semibold text-[#8b5cf6] hover:text-[#000000] transition-colors">
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