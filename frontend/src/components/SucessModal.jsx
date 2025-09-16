import { useEffect } from "react";

export default function SuccessModal({ isOpen, onClose, message, color }) {
  if (!isOpen) return null;

  // Define classes de cor dinamicamente
  const colorClasses = {
    pink: {
      text: "text-pink-600",
      button: "bg-pink-500 hover:bg-pink-600",
    },
    purple: {
      text: "text-purple-600",
      button: "bg-purple-500 hover:bg-purple-600",
    },
  };

  const current = colorClasses[color] || colorClasses.purple;

  // Auto fechar em 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fundo escuro */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Caixa de mensagem */}
      <div className="relative bg-white rounded-lg shadow-lg w-[350px] p-6 text-center z-10">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h2 className={`text-xl font-bold mb-4 ${current.text}`}>
          {message}
        </h2>

        <button
          onClick={onClose}
          className={`${current.button} text-white py-2 px-6 rounded transition`}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}