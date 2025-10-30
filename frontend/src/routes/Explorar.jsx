// --- 1. Importar 'useState' já está feito ---
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuMapPinned } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";

const Explorar = () => {
  const navigate = useNavigate();
  const [cidade, setCidade] = useState("");
  const [data, setData] = useState(""); 
  
  // --- 2. Adicionar um estado para o erro ---
  const [error, setError] = useState(""); // Começa como string vazia

  const handleSearch = (e) => {
    e.preventDefault(); 

    // --- 3. A VALIDAÇÃO ---
    // .trim() remove espaços em branco (ex: "   ")
    if (!cidade.trim() && !data) {
      // Se AMBOS estiverem vazios, define o erro e para a função
      setError("Por favor, preencha pelo menos um campo para buscar.");
      return; // Para a execução da função aqui
    }

    // Se passou na validação, limpa qualquer erro antigo
    setError(""); 
    
    // --- O resto da sua lógica original ---
    const params = new URLSearchParams();

    if (cidade) {
      params.append("cidade", cidade.trim()); // Adiciona o .trim() aqui também
    }
    if (data) {
      const [ano, mes, dia] = data.split('-');
      const dataFormatada = `${dia}/${mes}/${ano}`;
      params.append("data", dataFormatada);
    }
    navigate(`/explorar/encontros?${params.toString()}`);
  };

  // Função para limpar o erro quando o usuário digitar
  const handleInput = (setter, value) => {
    if (error) setError(""); // Limpa o erro
    setter(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conteúdo principal */}
      <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center px-4 py-12">
        {/* ... (Seu título e botão voltar) ... */}
        <div className="w-full max-w-5xl px-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100 font-bold"
          >
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

          <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSearch}>
            {/* Cidade */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-base font-medium text-purple-700 mb-1">
                <LuMapPinned />
                Cidade
              </label>
              <input
                type="text"
                placeholder="Digite sua cidade"
                className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${error ? 'ring-red-500 border-red-500' : 'focus:ring-purple-500'}`}
                value={cidade}
                // --- 4. Atualizar o 'onChange' ---
                onChange={(e) => handleInput(setCidade, e.target.value)}
              />
            </div>

            {/* Data */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-base font-medium text-purple-700 mb-1">
                <CiCalendar /> Data
              </label>
              <input
                type="date"
                className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${error ? 'ring-red-500 border-red-500' : 'focus:ring-purple-500'}`}
                value={data}
                // --- 4. Atualizar o 'onChange' ---
                onChange={(e) => handleInput(setData, e.target.value)}
              />
            </div>
            
            {/* --- 5. Mostrar a mensagem de erro --- */}
            {error && (
              <div className="md:col-span-2 text-center text-red-600 text-sm -mt-2">
                {error}
              </div>
            )}

            {/* Botão "Buscar Encontros" (Principal) */}
            <div className="flex justify-center mt-8 md:col-span-2">
              <button
                type="submit"
                className=" flex items-center gap-2 md:w-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white px-40 py-3 rounded-lg font-medium shadow hover:opacity-90 transition cursor-pointer transform hover:scale-105 hover:shadow-lg"
              >
                <FaMagnifyingGlass /> Buscar Encontros
              </button>
            </div>

            {/* Separador "ou" */}
            <div className="flex justify-center items-center md:col-span-2 mt-4">
              <span className="text-gray-500 text-sm">ou</span>
            </div>

            {/* Botão "Ver Todos" (Secundário) */}
            <div className="flex justify-center md:col-span-2 mt-4">
              <button
                type="button" 
                onClick={() => navigate("/explorar/encontros")} 
                className="flex items-center justify-center w-full max-w-xs text-purple-600 font-medium py-3 rounded-lg border-2 border-purple-600 hover:bg-purple-100 transition cursor-pointer"
              >
                Ver Todos os Encontros
              </button>
            </div>
            
          </form>
        </div>
      </main>
    </div>
  );
};

export default Explorar;