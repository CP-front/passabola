
const Home = () => {
  
  return (
    <section className="bg-gray-50 text-center px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-sm">
          <span className="mr-2">🏆</span> Revolucionando o Futebol Feminino
        </span>

        {/* Título */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#4C1D8F] leading-tight">
          Encontros de Futebol Feminino <br />
          Organizados e Automatizados
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg font-semibold text-purple-600">
          A plataforma do Passa a Bola conecta meninas e mulheres apaixonadas por
          futebol, organizando encontros semanais de forma simples, transparente
          e profissional.
        </p>

        {/* Botões */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:opacity-90 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
            📅 Participar dos encontros
          </button>
          <button className="px-6 py-3 rounded-md font-medium border border-purple-600 text-purple-700 hover:bg-purple-50 transition transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 cursor-pointer">
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
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-[#4C1D8F]">
          Funcionalidades da Plataforma
        </h2>
        <p className="text-lg mt-2 text-purple-600">
          Tecnologia e organização trabalhando juntas para criar a melhor
          experiência de futebol feminino do Brasil
        </p>
      </div>
      
      <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-sm p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-[#4C1D8F]">Times Equilibrados</h3>
          <p className="mt-2 text-sm text-purple-600">
            Sistema inteligente de montagem de times 7x7 com posições específicas para garantir jogos equilibrados e divertidos.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-sm p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-[#4C1D8F]">Encontros Semanais</h3>
          <p className="mt-2 text-sm text-purple-600">
            Organização automática de encontros semanais com cronograma fixo e previsibilidade para todas as participantes.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-sm p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-[#4C1D8F]">Sistema de Comprometimento</h3>
          <p className="mt-2 text-sm text-purple-600">
            Regras claras e automatizadas para garantir responsabilidade e respeito entre todas as jogadoras.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-sm p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-[#4C1D8F]">Transparência Total</h3>
          <p className="mt-2 text-sm text-purple-600">
            Visualização em tempo real das posições disponíveis, times formados e lista de espera de forma transparente.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg shadow-sm p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-[#4C1D8F]">Desenvolvimento Esportivo</h3>
          <p className="mt-2 text-sm text-purple-600">
            Ambiente seguro e organizado para meninas desenvolverem suas habilidades no futebol com regularidade.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg shadow-sm p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-[#4C1D8F]">Gestão Automatizada</h3>
          <p className="mt-2 text-sm text-purple-600">
            Eliminação de planilhas e grupos caóticos - tudo gerenciado automaticamente pela plataforma.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Badge */}
        <span className="inline-block mb-8 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow">
          Como funciona
        </span>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#4C1D8F]">
          Simples, Organizado e Eficiente
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-lg text-purple-600 max-w-2xl mx-auto">
          Em 4 passos simples você faz parte da maior rede de futebol feminino organizado do Brasil.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
              1
            </div>
            <span className="text-purple-600 text-2xl">⚙️</span>
          </div>
          <p className="mt-4 text-purple-700 font-semibold">Cadastro</p>
          <ul className="mt-2 space-y-1 text-sm text-purple-600 list-disc list-inside">
            <li>Cadastro simples e rápido</li>
            <li>Perfil personalizado</li>
            <li>Acesso imediato</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
              2
            </div>
            <span className="text-purple-600 text-2xl">📍</span>
          </div>
          <p className="mt-4 text-purple-700 font-semibold">Escolha sua Posição</p>
          <ul className="mt-2 space-y-1 text-sm text-purple-600 list-disc list-inside">
            <li>Goleira, defensora</li>
            <li>Meio-campista, atacante</li>
            <li>Máximo 14 jogadoras</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
              3
            </div>
            <span className="text-purple-600 text-2xl">👥</span>
          </div>
          <p className="mt-4 text-purple-700 font-semibold">Formação dos Times</p>
          <ul className="mt-2 space-y-1 text-sm text-purple-600 list-disc list-inside">
            <li>2 times completos</li>
            <li>Lista de reservas</li>
            <li>Notificações automáticas</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
              4
            </div>
            <span className="text-purple-600 text-2xl">📅</span>
          </div>
          <p className="mt-4 text-purple-700 font-semibold">Encontro Semanal</p>
          <ul className="mt-2 space-y-1 text-sm text-purple-600 list-disc list-inside">
            <li>Local fixo</li>
            <li>Horário regular</li>
            <li>Ambiente seguro</li>
          </ul>
        </div>
      </div>
    </section>



    </section>
  )
}

export default Home