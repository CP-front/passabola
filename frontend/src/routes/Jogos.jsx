import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Jogos() {
  const navigate = useNavigate();
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jogos")
      .then(res => res.json())
      .then(data => setJogos(data))
      .catch(err => console.error("Erro ao carregar jogos:", err));
  }, []);

  return (
    <div className="p-4">
      <div className="w-full max-w-5xl px-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100 font-bold">
          <ArrowLeft className="w-4 h-4" />
           Voltar
        </button>
      </div>
      <h2 className="text-xl font-bold text-purple-600 mb-4">Ultimos Jogos - Seleção Feminina Brasileira</h2>
      <ul className="space-y-3">
       {jogos.length > 0 ? (
          jogos.map((jogo, index) => (
            <li key={index} className="border border-pink-600 text-purple-600 p-3 rounded bg-white shadow">
              <p className="font-semibold">{jogo.partida}</p>
              <p>{jogo.data} às {jogo.horario}</p>
              <p className="text-pink-600">Placar: {jogo.placar}</p>
           </li>
          ))
        ) : (
          <p className="text-gray-500">Nenhum jogo disponível.</p>
        )}
      </ul>
    </div>
  );
}