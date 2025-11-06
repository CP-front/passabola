"use client"

import { useState } from "react"
import { ArrowLeft, Check, Plus } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

export default function Posicao() {
  const navigate = useNavigate();
  const { jogoId } = useParams();

  const [positions, setPositions] = useState([
    { id: "goleiro", name: "Goleira", player: "Disponível", available: true },
    { id: "defensora1", name: "Defensora", player: "Disponível", available: true },
    { id: "defensora2", name: "Defensora", player: "Disponível", available: true },
    { id: "meia1", name: "Ala", player: "Disponível", available: true },
    { id: "meia2", name: "Meia", player: "Disponível", available: true },
    { id: "meia3", name: "Ala", player: "Disponível", available: true },
    { id: "atacante", name: "Atacante", player: "Disponível", available: true },
    { id: "reserva1", name: "Reserva", player: "Disponível", available: true },
    { id: "reserva2", name: "Reserva", player: "Disponível", available: true },
  ])

  const [fieldPositions, setFieldPositions] = useState([
    { id: "goleiro", x: "50%", y: "90%", filled: false },
    { id: "defensora1", x: "25%", y: "70%", filled: false },
    { id: "defensora2", x: "75%", y: "70%", filled: false },
    { id: "meia1", x: "20%", y: "50%", filled: false },
    { id: "meia2", x: "50%", y: "50%", filled: false },
    { id: "meia3", x: "80%", y: "50%", filled: false },
    { id: "atacante", x: "50%", y: "25%", filled: false },
  ])

  const [reserveBench, setReserveBench] = useState([
    { id: "reserva1", filled: false },
    { id: "reserva2", filled: false },
  ])

  // modal seleção de posição
  const [selectedPosition, setSelectedPosition] = useState(null)

  // modal de sucesso
  const [showSuccess, setShowSuccess] = useState(false)

  // modal de erro (nenhuma posição selecionada)
  const [showNoSelection, setShowNoSelection] = useState(false)

  const openModal = (id) => {
    const pos = positions.find((p) => p.id === id)

    // só abre se a posição estiver livre
    const alreadyFilled =
      fieldPositions.find((p) => p.id === id)?.filled ||
      reserveBench.find((r) => r.id === id)?.filled

    if (alreadyFilled) return

    setSelectedPosition(pos)
  }

  const closeModal = () => {
    setSelectedPosition(null)
  }

  const confirmPosition = () => {
    if (!selectedPosition) return

    setPositions((prev) =>
      prev.map((pos) =>
        pos.id === selectedPosition.id
          ? { ...pos, available: false, player: "Jogadora inscrita" }
          : pos
      )
    )

    setFieldPositions((prev) =>
      prev.map((pos) =>
        pos.id === selectedPosition.id ? { ...pos, filled: true } : pos
      )
    )

    setReserveBench((prev) =>
      prev.map((pos) =>
        pos.id === selectedPosition.id ? { ...pos, filled: true } : pos
      )
    )

    closeModal()
  }

  const handleConfirmInscricao = () => {
    // verifica se alguma posição já foi preenchida
    const algumaOcupada =
      fieldPositions.some((p) => p.filled) ||
      reserveBench.some((r) => r.filled)

    if (algumaOcupada) {
      setShowSuccess(true)
    } else {
      setShowNoSelection(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 font-bold">
          <button
            onClick={() => navigate(`/explorar/encontros/time/${jogoId}`)}
            className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer rounded-md text-sm text-pink-600 border-pink-600 hover:bg-pink-100 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-lg sm:text-2xl font-semibold text-pink-600">
            Escolha sua posição - Time Passa
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-pink-600 sm:ml-28 mb-6">
          Playball Pompeia - 09/06/2025
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Campo */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-4 text-center">
            Campo de Futebol
          </h2>

          <div className="relative bg-green-500 rounded-lg p-4 aspect-[3/4] max-w-xs sm:max-w-md mx-auto">
            {/* marcações */}
            <div className="absolute inset-2 border-2 border-white rounded">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-20 sm:h-20 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white -translate-y-1/2"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-6 sm:h-8 border-2 border-white border-t-0"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-6 sm:h-8 border-2 border-white border-b-0"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-10 sm:h-12 border-2 border-white border-t-0"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-10 sm:h-12 border-2 border-white border-b-0"></div>
            </div>

            {/* posições */}
            {fieldPositions.map((pos) => (
              <div
                key={pos.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: pos.x, top: pos.y }}
              >
                <div
                  onClick={() => openModal(pos.id)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    pos.filled
                      ? "bg-pink-700 text-white"
                      : "bg-pink-600 text-white cursor-pointer"
                  }`}
                >
                  {pos.filled ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Banco de reservas */}
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold text-pink-600 mb-3">
              Banco de Reservas
            </h3>
            <div className="flex gap-3 flex-wrap">
              {reserveBench.map((reserva) => (
                <div
                  key={reserva.id}
                  onClick={() => openModal(reserva.id)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    reserva.filled
                      ? "bg-pink-700 text-white"
                      : "bg-pink-600 text-white cursor-pointer"
                  }`}
                >
                  {reserva.filled ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Escalação */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-pink-600 mb-4">
            Escalação do Time
          </h2>

          <div className="space-y-3 mb-6">
            {positions.map((position) => (
              <div
                key={position.id}
                className={`p-3 rounded-lg ${
                  position.available
                    ? "bg-pink-100 cursor-default"
                    : "bg-gray-100 cursor-default"
                }`}
              >
                <div className="font-bold text-pink-600 text-sm sm:text-base">
                  {position.name}
                </div>
                <div
                  className={`text-sm ${
                    position.available
                      ? "text-pink-500"
                      : "text-pink-700"
                  }`}
                >
                  {position.player}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleConfirmInscricao}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 sm:py-3 rounded-lg cursor-pointer text-sm sm:text-base"
          >
            Confirmar Inscrição
          </button>
        </div>
      </div>

      {/* Modal de confirmação de posição */}
      {selectedPosition && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white rounded-lg shadow-lg w-[350px] p-6 text-center z-10">
            <h2 className="text-lg font-bold text-pink-600 mb-4">
              Confirmar inscrição para {selectedPosition.name}?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmPosition}
                className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg cursor-pointer"
              >
                Sim
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-6 rounded-lg cursor-pointer"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de sucesso */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          ></div>

          <div className="relative bg-white rounded-lg shadow-lg w-[350px] p-6 text-center z-10">
            <h2 className="text-lg font-bold text-pink-600 mb-4">
              ✅ Inscrição Confirmada!
            </h2>

            <button
              onClick={() => setShowSuccess(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal de erro - Nenhuma posição selecionada */}
      {showNoSelection && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowNoSelection(false)}
          ></div>

          <div className="relative bg-white rounded-lg shadow-lg w-[350px] p-6 text-center z-10">
            <h2 className="text-lg font-bold text-pink-600 mb-4">
              ⚠️ Nenhuma posição selecionada!
            </h2>

            <button
              onClick={() => setShowNoSelection(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}