import { useNavigate } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";
import { LuMapPinned } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiShield } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { HiOutlineSparkles } from "react-icons/hi2";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-gray-100 text-center px-6 py-16">
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
          <button onClick={() => navigate("/explorar")} className="flex items-center gap-2 px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:opacity-90 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <CiCalendar className="" size={24} />Participar dos encontros
          </button>
          <button onClick={() => navigate("/jogos")} className="px-6 py-3 rounded-md font-medium border border-purple-600 text-purple-700 hover:bg-purple-50 transition transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 cursor-pointer">
            <span>Últimos jogos - Seleção</span>
          </button>
        </div>

        {/* Métricas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
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
      
      <section className="bg-gray-50 px-6 py-16 rounded-md" id="funcionalidades">
      <div>
        <h2 className="text-3xl font-bold text-[#4C1D8F]">
          Funcionalidades da Plataforma
        </h2>
        <p className="text-lg mt-2 mb-8 text-purple-600">
          Tecnologia e organização trabalhando juntas para criar a melhor
          experiência de futebol feminino do Brasil
        </p>
      </div>
      
      
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
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
              1
            </div>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EEEBFF] text-purple-600 text-2xl"><RiUserAddLine/></span>
          </div>
          <div className="flex text-lg">
          <p className="mt-4 text-[#4C1D8F] font-semibold ">Cadastro</p>
          </div>
          <p className="text-left mt-4 text-purple-700 font-semibold text-sm">Faça seu cadastro gratuito e acesse a área de inscrição para os encontros semanais.</p>
          <ul className="mt-2 space-y-1 text-sm text-purple-600 text-left list-disc list-inside">
            <li>Cadastro simples e rápido</li>
            <li>Perfil personalizado</li>
            <li>Acesso imediato</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
              2
            </div>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EEEBFF] text-purple-600 text-2xl"><LuMapPinned/></span>
          </div>
          <div className="flex text-lg">
          <p className="mt-4 text-[#4C1D8F] font-semibold">Escolha sua Posição</p>
          </div>
          <p className="text-left mt-4 text-purple-700 font-semibold text-sm">Selecione sua posição preferida no time de futebol 7 por ordem de chegada.</p>
          <ul className="mt-2 space-y-1 text-sm text-purple-600 text-left list-disc list-inside">
            <li>Goleira, defensora</li>
            <li>Meio-campista, atacante</li>
            <li>Máximo 14 jogadoras</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
              3
            </div>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EEEBFF] text-purple-600 text-2xl"><GrGroup/></span>
          </div>
          <div className="flex text-lg">
          <p className="mt-4 text-[#4C1D8F] font-semibold">Formação dos Times</p>
          </div>
          <p className="text-left mt-4 text-purple-700 font-semibold text-sm">Os times são formados automaticamente com as posições ocupadas da forma transparente.</p>
          <ul className="mt-2 space-y-1 text-sm text-purple-600 text-left list-disc list-inside">
            <li>2 times completos</li>
            <li>Lista de reservas</li>
            <li>Notificações automáticas</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 transition transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
              4
            </div>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EEEBFF] text-purple-600 text-2xl"><CiCalendar/></span>
          </div>
          <div className="flex text-lg">
          <p className="mt-4 text-[#4C1D8F] font-semibold">Encontro Semanal</p>
          </div>
          <p className="text-left mt-4 text-purple-700 font-semibold text-sm">Compareça no dia e horário marcado para jogar futebol de forma organizada.</p>
          <ul className="mt-2 space-y-1 text-sm text-purple-600 text-left list-disc list-inside">
            <li>Local fixo</li>
            <li>Horário regular</li>
            <li>Ambiente seguro</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="bg-white rounded-lg px-8 py-16" id="beneficios">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        <div>
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-medium mb-4">
            Benefícios
          </span>
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Transformando o Futebol <br /> Feminino no Brasil
          </h2>
          <p className="text-purple-600 mb-8">
            A plataforma é um primeiro passo para algo maior. Com ela, o Passa a Bola 
            fortaleceu seu papel como agente transformador do futebol feminino no Brasil.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg p-4 rounded-full">
                <AiOutlineThunderbolt/>
              </span>
              <div>
                <h3 className="font-semibold text-purple-800">Automatização total</h3>
                <p className="text-sm text-purple-600">
                  Eliminação de planilhas e grupos caóticos de mensagem
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg p-4 rounded-full">
                <FiShield/>
              </span>
              <div>
                <h3 className="font-semibold text-purple-800">Transparência</h3>
                <p className="text-sm text-purple-600">
                  Montagem clara dos times e ocupação de posições em tempo real
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg p-4 rounded-full">
                <CiHeart/>
              </span>
              <div>
                <h3 className="font-semibold text-purple-800">Responsabilidade</h3>
                <p className="text-sm text-purple-600">
                  Incentivo ao comprometimento e responsabilidade com a equipe
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg p-4 rounded-full">
                <HiOutlineSparkles/>
              </span>
              <div>
                <h3 className="font-semibold text-purple-800">Inclusão Digital</h3>
                <p className="text-sm text-purple-600">
                  Facilita o acesso de meninas ao esporte com processos simples
                </p>
              </div>
            </li>
          </ul>

        </div>
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-3">
            Rede colaborativa e segura
          </h3>
          <p className="text-sm text-pink-100 mb-6">
            Criação de uma rede colaborativa e segura para que meninas joguem 
            com frequência, organização e visibilidade, oferecendo tecnologia 
            social aplicada às práticas esportivas.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/20 rounded-lg py-4 text-center">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Organizado</p>
            </div>
            <div className="bg-white/20 rounded-lg py-4 text-center">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm">Disponível</p>
            </div>
          </div>
        </div>

        <button onClick={() => navigate("/explorar")} className="mt-8 px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-pink-500 to-purple-500 shadow hover:opacity-90 transition transform hover:scale-105 hover:shadow-lg cursor-pointer">
            Fazer parte da transformação
          </button>
      </div>
    </section>

    </section>
  )
}

export default Home