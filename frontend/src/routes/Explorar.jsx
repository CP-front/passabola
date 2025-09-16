import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuMapPinned } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";

const Explorar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Conteúdo principal */}
      <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
        {/* Título */}
       <div className="w-full max-w-5xl px-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100 font-bold">
          <ArrowLeft className="w-4 h-4" />
           Voltar
        </button>
      </div>
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-3 text-center">
          Explorar os Jogos
        </h1>
        <p className="text-purple-600 text-center mb-10 text-lg">
          Encontre encontros de futebol feminino na sua cidade
        </p>

        {/* Card de busca */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-purple-800 mb-6 text-center">
            Buscar Encontros
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            {/* Cidade */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-sm font-medium text-purple-700 mb-1">
                <LuMapPinned/>Cidade
              </label>
              <input
                type="text"
                placeholder="Digite sua cidade"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Data */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-sm font-medium text-purple-700 mb-1">
               <CiCalendar/> Data
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </form>

          {/* Botão */}
          <div className="flex justify-center mt-8">
            <button onClick={() => navigate("/explorar/encontros")}
              type="submit"
              className=" flex items-center gap-2 justifyw-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white px-40 py-3 rounded-lg font-medium shadow hover:opacity-90 transition cursor-pointer transform hover:scale-105 hover:shadow-lg"
            >
              <FaMagnifyingGlass/> Buscar Encontros
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explorar;