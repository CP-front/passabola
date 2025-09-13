import { Link } from "react-router-dom"
import { useState } from "react"

const Nav = () => {

  return (
    <header className="bg-white border-b border-[#d9d9d9] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">PB</span>
          </div>
          <span className="font-semibold text-[#000000]">Passa a Bola</span>
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
        <button className="px-4 py-1 border border-purple-600 rounded-md text-purple-600 hover:bg-purple-50 cursor-pointer transition">
          Entrar
        </button>
        <button className="px-4 py-1 rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 cursor-pointer transition">
          Cadastrar
        </button>
      </div>

      </div>
    </header>
  )
}

export default Nav