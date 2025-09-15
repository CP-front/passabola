import { useNavigate } from "react-router-dom";
import iconetimes from "../assets/iconepessoas.png"; // png dos bonecos
import { ArrowLeft } from "lucide-react"

export default function Time() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
      {/* Botão voltar */}
      <div className="w-full max-w-5xl px-4 mb-6">
        <button
          onClick={() => navigate("/explorar/encontros")}
          className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100 font-bold">
          <ArrowLeft className="w-4 h-4" />
           Voltar
        </button>
      </div>

      {/* Título */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-purple-600">Escolha Seu Time</h1>
        <p className="text-purple-400 mt-2">
          Playball Pompeia - 09/06/2025
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
            14 vagas restantes
          </p>
          <button
            onClick={() => navigate("/explorar/encontros/time/posicao")}
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
            14 vagas restantes
          </p>
          <button
            onClick={() => navigate("/explorar/encontros/time/posicao")}
            className="mt-6 w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition cursor-pointer shadow transform hover:scale-105 hover:shadow-lg"
          >
            Escolher Time Bola
          </button>
        </div>
      </div>
    </div>
  );
}
