const Footer = () => {
  return (
     <footer className="bg-[#4C1D8F] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#4c1d8f] font-bold text-sm">PB</span>
                </div>
                <span className="font-semibold">Passa a Bola</span>
              </div>
              <p className="text-[#a990e2] text-sm">
                Democratizando e profissionalizando a participação de meninas e mulheres no futebol feminino.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="text-[#a990e2] hover:text-white">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#a990e2] hover:text-white">
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
          <button className="flex items-center space-x-2 px-4 py-2 bg-white text-purple-700 rounded-md font-medium hover:bg-gray-100 transition">
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
          <div className="flex space-x-3 mt-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center border-2 border-pink-400 rounded-md hover:bg-pink-500 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center border-2 border-pink-400 rounded-md hover:bg-pink-500 hover:text-white transition">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      {/* <div className="border-t border-purple-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2024 Passa a Bola. Todos os Direitos Reservados</p>
          <p className="flex items-center space-x-1 mt-2 md:mt-0">
            <span>Feito com</span>
            <span className="text-pink-400">❤</span>
            <span>para o futebol feminino</span>
          </p>
        </div>
          </div> */}

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

// // <footer className="bg-purple-800 text-gray-200">
//       {/* Conteúdo principal */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Coluna 1 - Logo + texto */}
//         <div>
//           <div className="flex items-center space-x-2">
//             <img src="/logo.png" alt="Passa a Bola" className="w-10 h-10" />
//             <div>
//               <h4 className="font-bold text-lg">Passa a Bola</h4>
//               <p className="text-sm text-gray-300">Futebol Feminino</p>
//             </div>
//           </div>
//           <p className="mt-3 text-sm text-gray-300">
//             Democratizando e profissionalizando a participação de meninas e
//             mulheres no futebol feminino.
//           </p>

//           {/* Logo parceiro */}
//           <img src="/visionary.png" alt="Visionary Solutions" className="mt-4 w-32" />
//         </div>

//         {/* Coluna 2 - Plataforma */}
//         <div>
//           <h4 className="font-semibold mb-3">Plataforma</h4>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">Como Funciona</a></li>
//             <li><a href="#" className="hover:underline">Benefícios</a></li>
//             <li><a href="#" className="hover:underline">Cadastrar</a></li>
//             <li><a href="#" className="hover:underline">Entrar</a></li>
//           </ul>
//         </div>

//         {/* Coluna 3 - Suporte */}
//         <div>
//           <h4 className="font-semibold mb-3">Suporte</h4>
//           <ul className="space-y-2 text-sm">
//             <li><a href="#" className="hover:underline">Central de Ajuda</a></li>
//             <li><a href="#" className="hover:underline">Regras dos Encontros</a></li>
//             <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
//             <li><a href="#" className="hover:underline">Termos de Uso</a></li>
//           </ul>
//         </div>

//         {/* Coluna 4 - Contato */}
//         <div>
//           <h4 className="font-semibold mb-3">Contato</h4>
//           <button className="flex items-center space-x-2 px-4 py-2 bg-white text-purple-700 rounded-md font-medium hover:bg-gray-100 transition">
//             <svg xmlns="http://www.w3.org/2000/svg" 
//               fill="none" viewBox="0 0 24 24" strokeWidth={2} 
//               stroke="currentColor" className="w-5 h-5">
//               <path strokeLinecap="round" strokeLinejoin="round" 
//                 d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 
//                    2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 
//                    0019.5 4.5h-15a2.25 2.25 0 
//                    00-2.25 2.25m19.5 0v.243a2.25 2.25 0 
//                    01-1.07 1.916l-7.5 4.615a2.25 2.25 0 
//                    01-2.36 0l-7.5-4.615A2.25 2.25 0 
//                    013 6.993V6.75" />
//             </svg>
//             <span>Email</span>
//           </button>

//           {/* Ícones sociais */}
//           <div className="flex space-x-3 mt-4">
//             <a href="#" className="w-8 h-8 flex items-center justify-center border-2 border-pink-400 rounded-md hover:bg-pink-500 hover:text-white transition">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#" className="w-8 h-8 flex items-center justify-center border-2 border-pink-400 rounded-md hover:bg-pink-500 hover:text-white transition">
//               <i className="fab fa-youtube"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Linha inferior */}
//       <div className="border-t border-purple-700">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
//           <p>© 2024 Passa a Bola. Todos os Direitos Reservados</p>
//           <p className="flex items-center space-x-1 mt-2 md:mt-0">
//             <span>Feito com</span>
//             <span className="text-pink-400">❤</span>
//             <span>para o futebol feminino</span>
//           </p>
//         </div>
//       </div>
//     </footer>