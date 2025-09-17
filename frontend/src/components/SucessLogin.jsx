export default function SuccessLogin({ isOpen, onClose }) {
  if (!isOpen) return null;

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

        <h2 className="text-xl font-bold text-purple-600 mb-4">
          Login Realizado!
        </h2>

        <button
          onClick={onClose}
          className="bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}