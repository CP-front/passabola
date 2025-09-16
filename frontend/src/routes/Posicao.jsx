"use client"

import { ArrowLeft, Check, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Posicao() {

  const navigate = useNavigate();

  const positions = [
    { id: "goleiro", name: "Goleiro", player: "Disponível", available: true },
    { id: "defensora1", name: "Defensora", player: "Disponível", available: true },
    { id: "defensora2", name: "Defensora", player: "Disponível", available: true },
    { id: "meia1", name: "Ala", player: "Disponível", available: true },
    { id: "meia2", name: "Meia", player: "Disponível", available: true },
    { id: "meia3", name: "Ala", player: "Disponível", available: false },
    { id: "atacante", name: "Atacante", player: "Disponível", available: false },
    { id: "reserva1", name: "Reserva", player: "Disponível", available: false },
    { id: "reserva2", name: "Reserva", player: "Disponível", available: true },
  ]

  const fieldPositions = [
    { id: "goleiro", x: "50%", y: "90%", filled: false },
    { id: "defensora1", x: "25%", y: "70%", filled: false },
    { id: "defensora2", x: "75%", y: "70%", filled: false },
    { id: "meia1", x: "20%", y: "50%", filled: false },
    { id: "meia2", x: "50%", y: "50%", filled: false },
    { id: "meia3", x: "80%", y: "50%", filled: true },
    { id: "atacante", x: "50%", y: "25%", filled: true },
  ]

  const reserveBench = [
  { id: "reserva1", filled: true },
  { id: "reserva2", filled: false }, 
]
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 font-bold">
          <button 
          onClick={() => navigate("/explorar/encontros/time")}
          className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-purple-600 border-purple-600 hover:bg-purple-100 font-bold">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-lg sm:text-2xl font-semibold text-purple-600">Escolha sua posição - Time Passa</h1>
        </div>
        <p className="text-xs sm:text-sm text-purple-600 sm:ml-28 mb-6">Playball Pompeia - 09/06/2025</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Soccer Field Section */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 mb-4 text-center">Campo de Futebol</h2>

          <div className="relative bg-green-500 rounded-lg p-4 aspect-[3/4] max-w-xs sm:max-w-md mx-auto">
            {/* Field markings */}
            <div className="absolute inset-2 border-2 border-white rounded">
              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-20 sm:h-20 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>

              {/* Center line */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white -translate-y-1/2"></div>
        
              {/* Goal areas */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-6 sm:h-8 border-2 border-white border-t-0"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-6 sm:h-8 border-2 border-white border-b-0"></div>

              {/* Penalty areas */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-10 sm:h-12 border-2 border-white border-t-0"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-10 sm:h-12 border-2 border-white border-b-0"></div>
            </div>

            {/* Player positions */}
            {fieldPositions.map((pos) => (
              <div
                key={pos.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: pos.x, top: pos.y }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-purple-600 text-white">
                  {pos.filled ? <Check className="w-4 h-4 sm:w-5 sm:h-5"/> : <Plus className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />}
                </div>
              </div>
            ))}
          </div>

          {/* Reserve Bench */}
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold text-purple-600 mb-3">Banco de Reservas</h3>
            <div className="flex gap-3 flex-wrap">
              {reserveBench.map((reserva) => (
                <div
                  key={reserva.id}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center text-white"
                >
                  {reserva.filled ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Lineup Section */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 mb-4">Escalação do Time</h2>

          <div className="space-y-3 mb-6">
            {positions.map((position) => (
              <div
                key={position.id}
                className={`p-3 rounded-lg ${position.available ? "bg-purple-100 cursor-pointer" : "bg-gray-100 cursor-default"}`}
              >
                <div className="font-bold text-purple-600 text-sm sm:text-base">{position.name}</div>
                <div className={`text-sm ${position.available ? "text-purple-500 cursor-pointer" : "text-purple-700 cursor-default"}`}>
                  {position.player}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 sm:py-3 rounded-lg cursor-pointer text-sm sm:text-base">
            Confirmar Inscrição
          </button>
        </div>
      </div>
    </div>
  )
}
