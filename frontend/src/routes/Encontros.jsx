import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { LuMapPinned } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";

// --- 1. IMPORTAÇÕES ADICIONADAS ---
import { useState, useEffect } from "react";
import mockEncontros from "../../../backend/data/encontros.json"; // Verifique se o caminho está correto

function Encontros() {
  const navigate = useNavigate();

  // --- 2. ESTADO E EFEITO ADICIONADOS ---
  // Estado para guardar a lista de encontros
  const [encontros, setEncontros] = useState([]);

  // useEffect para carregar os dados do JSON quando o componente montar
  useEffect(() => {
    // No futuro, você pode trocar 'mockEncontros' por uma chamada de API (fetch)
    setEncontros(mockEncontros);
  }, []); // O [] garante que isso rode apenas uma vez

  return (
    <main className="px-8 py-12 bg-gray-100 max-w-5xl mx-auto">
      {/* Cabeçalho (igual ao seu) */}
      <div className="flex items-center gap-2 mb-8 font-bold">
        <button
          onClick={() => navigate("/explorar/")}
          className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>
        <h1 className="text-2xl text-purple-700">Encontros Disponíveis</h1>
      </div>

      {/* --- 3. LOOP .MAP() ADICIONADO --- */}
      {/* O grid agora lê do estado 'encontros' e cria um card para cada item */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {encontros.map((encontro) => (
          // O 'key' é crucial para o React
          <div key={encontro.id} className="bg-white rounded-xl shadow p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-purple-700 mb-2">
              <LuMapPinned />
              {encontro.local} {/* <-- DADO DINÂMICO */}
            </h2>
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <span>
                <CiCalendar size={20} />
              </span>
              <span>{encontro.data}</span> {/* <-- DADO DINÂMICO */}
            </div>
            <div className="flex items-center gap-2 text-sm text-purple-600 mb-4">
              <span>
                <GrGroup size={18} />
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                {encontro.vagasRestantes} vagas restantes {/* <-- DADO DINÂMICO */}
              </span>
            </div>
            <button
              onClick={() => navigate("/explorar/encontros/time")} // No futuro, pode ser: navigate(`/explorar/encontros/time/${encontro.id}`)
              className="w-full py-2 cursor-pointer font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:opacity-90 shadow transition transform hover:scale-105 hover:shadow-lg"
            >
              Inscreva-se
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Encontros;