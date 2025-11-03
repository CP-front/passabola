import { useNavigate, useParams } from "react-router-dom"; // 1. Importar useParams
import { useState, useEffect } from "react"; // 2. Importar useState e useEffect
import iconetimes from "../assets/iconepessoas.png";
import { ArrowLeft } from "lucide-react";

// 3. Importar o JSON (confirme se este caminho está correto)
import mockEncontros from "../../../backend/data/encontros.json";

export default function Time() {
  const navigate = useNavigate();

  // 4. Pegar o 'jogoId' da URL
  const { jogoId } = useParams();

  // 5. Criar estado para guardar o jogo específico
  const [jogo, setJogo] = useState(null);

  // 6. Buscar os dados do jogo ao carregar a página
  useEffect(() => {
    const jogoEncontrado = mockEncontros.find(
      (encontro) => encontro.id.toString() === jogoId
    );

    if (jogoEncontrado) {
      setJogo(jogoEncontrado);
    } else {
      console.error("Jogo não encontrado com o ID:", jogoId);
      navigate("/explorar"); // Volta se não achar o jogo
    }
  }, [jogoId, navigate]); // Roda sempre que o ID mudar

  // 7. Mostrar um "carregando" enquanto busca o jogo
  if (!jogo) {
    return (
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        Carregando...
      </div>
    );
  }

  // 8. O JSX agora usa os dados do estado 'jogo'
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      {/* Botão voltar */}
      <div className="w-full max-w-5xl px-4 mb-6">
        <button
          onClick={() => navigate("/explorar/encontros")}
          className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100 font-bold">
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>
      </div>

      {/* Título (AGORA DINÂMICO) */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-purple-600">Escolha Seu Time</h1>
        <p className="text-purple-400 mt-2">
          {jogo.local} - {jogo.data}
        </p>
        <p className="text-purple-400 text-sm">
          {jogo.cidade}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
        {/* Time Passa */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
            <img src={iconetimes} alt="Time Passa" className="w-auto h-auto" />
          </div>
          <h2 className="text-xl font-bold text-purple-600">Time Passa</h2>
          <p className="text-sm bg-purple-100 text-purple-600 px-4 py-1 rounded-full mt-3">
            {jogo.vagasRestantes} vagas restantes {/* (futuramente, vagas do time) */}
          </p>
          <button
            // 9. Passar o ID do jogo para a próxima página
            onClick={() => navigate(`/explorar/encontros/time/posicao/${jogo.id}`)}
            className="mt-6 w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition cursor-pointer shadow transform hover:scale-105 hover:shadow-lg"
          >
            Escolher Time Passa
          </button>
        </div>

        {/* Time Bola */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
            <img src={iconetimes} alt="Time Bola" className="w-auto h-auto" />
          </div>
          <h2 className="text-xl font-bold text-pink-600">Time Bola</h2>
          <p className="text-sm bg-pink-100 text-pink-600 px-4 py-1 rounded-full mt-3">
            {jogo.vagasRestantes} vagas restantes {/* (futuramente, vagas do time) */}
          </p>
          <button
            // 9. Passar o ID do jogo para a próxima página
            onClick={() => navigate(`/explorar/encontros/time/posicaoRosa/${jogo.id}`)}
            className="mt-6 w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition cursor-pointer shadow transform hover:scale-105 hover:shadow-lg"
          >
            Escolher Time Bola
          </button>
        </div>
      </div>
    </div>
  );
}