import { useState } from "react";
import { FaInstagram, FaYoutube, FaMailBulk} from "react-icons/fa";


const Footer=()=>{

  return (
    <footer className="bg-purple-">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + descrição */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="Passa a Bola"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">Passa a Bola</h2>
              <p className="text-sm text-gray-200">Futebol Feminino</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Democratizando e profissionalizando a participação de meninas e
            mulheres no futebol feminino.
          </p>
          <img src="/visionary.png" alt="Visionary" className="w-32" />
        </div>

        {/* Plataforma */}
        <div>
          <h3 className="text-base font-semibold mb-3">Plataforma</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#">Como Funciona</a></li>
            <li><a href="#">Benefícios</a></li>
            <li><a href="#">Cadastrar</a></li>
            <li><a href="#">Entrar</a></li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="text-base font-semibold mb-3">Suporte</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#">Central de Ajuda</a></li>
            <li><a href="#">Regras dos Encontros</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contato</h3>
          <a
            href="mailto:contato@passaabola.com"
            className="flex items-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-lg font-medium text-sm w-fit mb-4"
          >
            <Mail size={18} /> Email
          </a>
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 bg-white rounded-lg text-pink-600 hover:bg-gray-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-lg text-pink-600 hover:bg-gray-200"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

 
      <div className="border-t border-purple-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 px-6 max-w-7xl mx-auto">
        <p>© 2024 Passa a Bola. Todos os Direitos Reservados</p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Feito com <span className="text-red-500">❤</span> para o futebol feminino
        </p>
      </div>
    </footer>
  );
};



export default Footer;