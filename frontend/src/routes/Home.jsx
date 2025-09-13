
const Home = () => {
  
  return (
    <section className="bg-gray-50 text-center px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-sm">
          <span className="mr-2">🏆</span> Revolucionando o Futebol Feminino
        </span>

        {/* Título */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#4C1D8F] leading-tight">
          Encontros de Futebol Feminino <br />
          Organizados e Automatizados
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg text-purple-600">
          A plataforma do Passa a Bola conecta meninas e mulheres apaixonadas por
          futebol, organizando encontros semanais de forma simples, transparente
          e profissional.
        </p>

        {/* Botões */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:opacity-90 transition">
            📅 Participar dos encontros
          </button>
          <button className="px-6 py-3 rounded-md font-medium border border-purple-600 text-purple-700 hover:bg-purple-50 transition flex items-center space-x-2">
            <span>⚙</span>
            <span>Saiba Mais</span>
          </button>
        </div>

        {/* Métricas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#4C1D8F]">14</h3>
            <p className="text-sm text-purple-600">Jogadoras por encontro</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#4C1D8F]">7x7</h3>
            <p className="text-sm text-purple-600">Formato dos jogos</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#4C1D8F]">100%</h3>
            <p className="text-sm text-purple-600">Automatizado</p>
          </div>
        </div>
      </div>

      {/* Seção de funcionalidades */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-[#4C1D8F]">
          Funcionalidades da Plataforma
        </h2>
        <p className="text-lg mt-2 text-purple-600">
          Tecnologia e organização trabalhando juntas para criar a melhor
          experiência de futebol feminino do Brasil
        </p>
      </div>

    </section>
    // <section className="px-6 py-16 bg-gradient-to-br from-[#eeebff] to-[#fde3ff]">
    //     <div className="max-w-7xl mx-auto">
    //       <div className="grid lg:grid-cols-2 gap-12 items-center">
    //         <div>
    //           <h1 className="text-4xl lg:text-5xl font-bold text-[#000000] mb-6 text-balance">
    //             Encontros de Futebol Feminino
    //             <span className="text-[#8b5cf6]"> Organizados e Automatizados</span>
    //           </h1>
    //           <p className="text-lg text-[#000000] mb-8 text-pretty">
    //             Conecte-se com outras jogadoras, organize partidas e transforme o futebol feminino no Brasil através da
    //             nossa plataforma inovadora.
    //           </p>

    //           <div className="flex flex-col sm:flex-row gap-4 mb-8">
    //             <Button className="bg-[#8b5cf6] hover:bg-[#4c1d8f] text-white px-8 py-3">Começar Agora</Button>
    //             <Button variant="outline" className="border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#eeebff] bg-transparent">
    //               Saiba Mais
    //             </Button>
    //           </div>

    //           <div className="bg-white rounded-lg p-6 shadow-sm">
    //             <h3 className="font-semibold text-[#000000] mb-4">Funcionalidades da Plataforma</h3>
    //             <div className="grid grid-cols-3 gap-4 text-center">
    //               <div>
    //                 <div className="text-2xl font-bold text-[#8b5cf6]">500+</div>
    //                 <div className="text-sm text-[#000000]">Jogadoras</div>
    //               </div>
    //               <div>
    //                 <div className="text-2xl font-bold text-[#e8269a]">150+</div>
    //                 <div className="text-sm text-[#000000]">Partidas</div>
    //               </div>
    //               <div>
    //                 <div className="text-2xl font-bold text-[#8b5cf6]">25+</div>
    //                 <div className="text-sm text-[#000000]">Cidades</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="relative">
    //           <div className="bg-white rounded-2xl p-8 shadow-lg">
    //             <div className="space-y-4">
    //               <div className="flex items-center gap-3">
    //                 <div className="w-10 h-10 bg-[#eeebff] rounded-full flex items-center justify-center">
    //                   <Calendar className="w-5 h-5 text-[#8b5cf6]" />
    //                 </div>
    //                 <div>
    //                   <div className="font-semibold text-[#000000]">Próxima Partida</div>
    //                   <div className="text-sm text-[#000000]">Sábado, 15:00</div>
    //                 </div>
    //               </div>

    //               <div className="bg-[#fbebff] rounded-lg p-4">
    //                 <div className="flex items-center justify-between mb-2">
    //                   <span className="font-medium text-[#000000]">Campo Central</span>
    //                   <Badge className="bg-[#8b5cf6] text-white">Confirmado</Badge>
    //                 </div>
    //                 <div className="text-sm text-[#000000]">8 jogadoras confirmadas</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
  )
}

export default Home