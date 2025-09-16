import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"
import { CiCalendar } from "react-icons/ci";
import { LuMapPinned } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";

function Encontros() {
  const navigate = useNavigate();
  return (
    <main className="px-8 py-12 bg-gray-100 max-w-5xl mx-auto">
      {/* Cabeçalho */}
      <div className="flex items-center gap-2 mb-8 font-bold">
        <button 
        onClick={() => navigate("/explorar/")}
        className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100">
        <ArrowLeft className="w-4 h-4" />
         Voltar
        </button>
        <h1 className="text-2xl text-purple-700">Encontros Disponíveis</h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-purple-700 mb-2"><LuMapPinned/>Playball Pompeia</h2>
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span><CiCalendar size={20}/></span>
            <span>09/06/2025</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-purple-600 mb-4">
            <span><GrGroup size={18}/></span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
              14 vagas restantes
            </span>
          </div>
          <button onClick={() => navigate("/explorar/encontros/time")}
           className="w-full py-2 cursor-pointer font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:opacity-90 shadow transition transform hover:scale-105 hover:shadow-lg">
            Inscreva-se
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-purple-700 mb-2"><LuMapPinned/>Playball Pompeia</h2>
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span><CiCalendar size={20}/></span>
            <span>12/06/2025</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-purple-600 mb-4">
            <span><GrGroup size={18}/></span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
              14 vagas restantes
            </span>
          </div>
          <button onClick={() => navigate("/explorar/encontros/time")}
          className="w-full py-2 cursor-pointer font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:opacity-90 shadow transition transform hover:scale-105 hover:shadow-lg">
            Inscreva-se
          </button>
        </div>
      </div>
    </main>
  );
}

export default Encontros;