import { useEffect, useState } from "react";

export default function Jogos() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jogos")
      .then(res => res.json())
      .then(data => setJogos(data))
      .catch(err => console.error("Erro ao carregar jogos:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-purple-600 mb-4">Ultimos Jogos</h2>
      <ul className="space-y-3">
       {jogos.length > 0 ? (
          jogos.map((jogo, index) => (
            <li key={index} className="border p-3 rounded bg-white shadow">
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