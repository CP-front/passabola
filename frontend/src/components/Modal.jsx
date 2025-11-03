import { useState } from "react";
import { useAuth } from "./AuthContext";

export default function RegisterModal({ isOpen, onClose, setModalType }) {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const { register } = useAuth();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        register(formData);
      } else {
        setMessage(data.error);
      }
    } catch {
      setMessage("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg shadow-lg w-[400px] p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-pink-600 mb-4">
          Cadastro de Usuário
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" name="nome" placeholder="Nome Completo" required onChange={handleChange}
            className="border p-2 rounded border-pink-500" />
          <input type="text" name="cpf" placeholder="CPF" required onChange={handleChange}
            className="border p-2 rounded border-pink-500" />
          <input type="email" name="email" placeholder="E-mail" required onChange={handleChange}
            className="border p-2 rounded border-pink-500" />
          <input type="text" name="cep" placeholder="CEP" required onChange={handleChange}
            className="border p-2 rounded border-pink-500" />
          <input type="tel" name="telefone" placeholder="Telefone" required onChange={handleChange}
            className="border p-2 rounded border-pink-500" />
          <input type="password" name="senha" placeholder="Senha" required onChange={handleChange}
            className="border p-2 rounded border-pink-500" />
          <input type="password" name="confirmarSenha" placeholder="Confirmar senha" required onChange={handleChange}
            className="border p-2 rounded border-pink-500" />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" required /> Aceito os termos de uso
          </label>

          <button className="bg-pink-500 text-white py-2 rounded hover:bg-pink-400">
            Cadastrar
          </button>
        </form>

        {message && <p className="text-sm mt-2 text-red-500">{message}</p>}

        <p className="text-sm mt-3 text-center">
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
