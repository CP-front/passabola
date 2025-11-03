// Hooks para ler a URL (useSearchParams) e navegar (useNavigate)
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { LuMapPinned } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";

import { useState, useEffect } from "react";
// Importa os dados
import mockEncontros from "../../../backend/data/encontros.json"; // Verifique se o caminho está correto

// Helper para remover acentos e comparar
const normalizeText = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "");
};

function Encontros() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [encontrosFiltrados, setEncontrosFiltrados] = useState([]);

  // Pega os parâmetros da URL
  const cidadeQuery = searchParams.get('cidade');
  const dataQuery = searchParams.get('data');

  // Lógica de filtragem
  useEffect(() => {
    let dadosFiltrados = mockEncontros;

    if (cidadeQuery) {
      const normalizedQuery = normalizeText(cidadeQuery);
      dadosFiltrados = dadosFiltrados.filter(encontro => {
        const normalizedCidade = normalizeText(encontro.cidade);
        return normalizedCidade.includes(normalizedQuery);
      });
    }

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {encontrosFiltrados.length > 0 ? (
          encontrosFiltrados.map((encontro) => (
            <div key={encontro.id} className="bg-white rounded-xl shadow p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-purple-700 mb-2">
                <LuMapPinned />
                {encontro.local}
              </h2>
              <p className="text-sm text-gray-500 mb-2 ml-1">
                {encontro.cidade} 
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <span><CiCalendar size={20} /></span>
                <span>{encontro.data}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-600 mb-4">
                <span><GrGroup size={18} /></span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                  {encontro.vagasRestantes} vagas restantes
                </span>
              </div>
              
              {/* --- BOTÃO MODIFICADO --- */}
              {/* Agora envia o ID do encontro na URL */}
              <button
                onClick={() => navigate(`/explorar/encontros/time/${encontro.id}`)} 
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
