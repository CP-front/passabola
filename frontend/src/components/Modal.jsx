import { useState } from "react";
import { useAuth } from "./AuthContext";

export default function RegisterModal({ isOpen, onClose, setModalType }) {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.senha !== formData.confirmarSenha) {
      setMessage("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        register(formData);
        setMessage("Cadastro realizado com sucesso!");
        setTimeout(() => {
          onClose();
        }, 1200);
      } else {
        setMessage(data.error || "Erro ao cadastrar.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      {/* Fundo escurecido */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-lg w-[400px] p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-pink-600 mb-4 text-center">
          Cadastro de Usuário
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="nome"
            placeholder="Nome Completo"
            required
            onChange={handleChange}
            className="border border-pink-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 rounded-lg transition"
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            required
            onChange={handleChange}
            className="border border-pink-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 rounded-lg transition"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            onChange={handleChange}
            className="border border-pink-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 rounded-lg transition"
          />
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            required
            onChange={handleChange}
            className="border border-pink-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 rounded-lg transition"
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            required
            onChange={handleChange}
            className="border border-pink-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 rounded-lg transition"
          />

          {/* Dropdown de posição */}
          <select
            name="posicao"
            required
            onChange={handleChange}
            className="border border-pink-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 rounded-lg transition text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione sua posição preferida
            </option>
            <option value="Goleira">Goleira</option>
            <option value="Defensora">Defensora</option>
            <option value="Meia">Meia</option>
            <option value="Ala">Ala</option>
            <option value="Atacante">Atacante</option>
          </select>

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            required
            onChange={handleChange}
            className="border border-pink-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 rounded-lg transition"
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            required
            onChange={handleChange}
            className="border border-pink-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 rounded-lg transition"
          />

          <label className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <input type="checkbox" required /> Aceito os termos de uso
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`bg-pink-500 hover:bg-pink-400 text-white py-2 rounded-lg mt-2 font-semibold transition cursor-pointer ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        {message && (
          <p
            className={`text-sm mt-3 text-center ${
              message.includes("sucesso") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-sm mt-4 text-center">
          Já tem conta?{" "}
          <span
            onClick={() => setModalType("login")}
            className="text-purple-600 cursor-pointer hover:underline"
          >
            Fazer Login
          </span>
        </p>
      </div>
    </div>
  );
}
