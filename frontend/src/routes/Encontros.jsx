// --- 1. Importar o hook 'useSearchParams' ---
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { LuMapPinned } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";

import { useState, useEffect } from "react";
// O caminho do seu JSON
import mockEncontros from "../../../backend/data/encontros.json"; 

// --- NOVA FUNÇÃO ---
// Helper para remover acentos e converter para minúsculas
const normalizeText = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .normalize("NFD") // Separa acentos das letras
    .replace(/[\u0300-\u036f]/g, ""); // Remove os acentos
};


function Encontros() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [encontrosFiltrados, setEncontrosFiltrados] = useState([]);

  const cidadeQuery = searchParams.get('cidade');
  const dataQuery = searchParams.get('data');

  // --- 4. Modificar o useEffect para FILTRAR ---
  useEffect(() => {
    let dadosFiltrados = mockEncontros;

    // Filtra por CIDADE
    if (cidadeQuery) {
      // Normaliza o termo da busca (o que o usuário digitou)
      const normalizedQuery = normalizeText(cidadeQuery);
      
      dadosFiltrados = dadosFiltrados.filter(encontro => {
        // Normaliza o campo 'cidade' do JSON
        const normalizedCidade = normalizeText(encontro.cidade);
        
        // Compara os dois textos normalizados
        return normalizedCidade.includes(normalizedQuery);
      });
    }

    // Filtra por DATA
    if (dataQuery) {
      dadosFiltrados = dadosFiltrados.filter(encontro =>
        encontro.data === dataQuery
      );
    }

    setEncontrosFiltrados(dadosFiltrados);

  }, [cidadeQuery, dataQuery]); 

  return (
    <main className="px-8 py-12 bg-gray-100 max-w-5xl mx-auto min-h-screen">
      {/* Cabeçalho */}
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

      {/* --- 5. Renderização (sem alteração na lógica) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {encontrosFiltrados.length > 0 ? (
          
          encontrosFiltrados.map((encontro) => (
            <div key={encontro.id} className="bg-white rounded-xl shadow p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-purple-700 mb-2">
                <LuMapPinned />
                {encontro.local} {/* Mostra o local, mas filtrou pela cidade */}
              </h2>
              {/* Adicionamos a cidade aqui para ficar claro */}
              <p className="text-sm text-gray-500 mb-2 ml-1">
                {encontro.cidade} 
              </p>
              
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <span>
                  <CiCalendar size={20} />
                </span>
                <span>{encontro.data}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-600 mb-4">
                <span>
                  <GrGroup size={18} />
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                  {encontro.vagasRestantes} vagas restantes
                </span>
              </div>
              <button
                onClick={() => navigate("/explorar/encontros/time")} 
                className="w-full py-2 cursor-pointer font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:opacity-90 shadow transition transform hover:scale-105 hover:shadow-lg"
              >
                Inscreva-se
              </button>
            </div>
          ))
        ) : (
          
          <div className="col-span-full text-center text-gray-600 py-12">
            <h3 className="text-xl font-semibold">Nenhum encontro encontrado</h3>
            <p>Tente alterar os filtros de busca na página anterior.</p>
          </div>

        )}
      </div>
    </main>
  );
}

export default Encontros;