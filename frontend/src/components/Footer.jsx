import { FaInstagram, FaYoutube } from "react-icons/fa";
import passaBola from "../assets/passaBola_3x1branco.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
     <footer className="bg-[#4C1D8F] text-white px-6 py-12" id="footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={passaBola} alt="Passa Bola" className="w-55 h-30"/>
              </div>
              <p className="text-[#a990e2] text-sm">
                Democratizando e profissionalizando a participação de meninas e mulheres no futebol feminino.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a onClick={() => navigate("/#funcionalidades")} href="#funcionalidades" className="text-[#a990e2] hover:text-white">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a onClick={() => navigate("/#beneficios")} href="/#beneficios" className="text-[#a990e2] hover:text-white">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#a990e2] hover:text-white">
                    Cadastro
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#a990e2] hover:text-white">
                    Entrar
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="text-[#a990e2] hover:text-white">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#a990e2] hover:text-white">
                    Regras dos Encontros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#a990e2] hover:text-white">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#a990e2] hover:text-white">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            <div>
          <h4 className="font-semibold mb-3">Contato</h4>
          <button className="flex items-center space-x-2 px-10 py-2 bg-white text-purple-700 rounded-md font-medium hover:bg-purple-700 hover:text-white transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" strokeWidth={2} 
              stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 
                   2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 
                   0019.5 4.5h-15a2.25 2.25 0 
                   00-2.25 2.25m19.5 0v.243a2.25 2.25 0 
                   01-1.07 1.916l-7.5 4.615a2.25 2.25 0 
                   01-2.36 0l-7.5-4.615A2.25 2.25 0 
                   013 6.993V6.75" />
            </svg>
            <span>Email</span>
          </button>

          {/* Ícones sociais */}
        <div className="flex gap-3 mt-4">
        <a href="https://www.instagram.com/passaabola/" target="_blank" rel="noopener noreferrer"
        className="p-2 border border-pink-600 rounded-md text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
        >
          <FaInstagram size={22} />
        </a>
        <a href="https://www.youtube.com/@passabola"target="_blank"rel="noopener noreferrer"
        className="p-2 border border-pink-600 rounded-md text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
        >
          <FaYoutube size={22} />
        </a>
      </div>
        </div>
      </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">&copy; 2025 Passa a Bola. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <p className="text-white/60 flex items-center space-x-1 mt-2 md:mt-0">
                <span>Feito com</span>
                <span className="text-pink-400">❤</span>
                <span>para o futebol feminino</span>
                </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer