import { useState } from "react";
import SuccessModal from "./SucessModal";
import { useAuth } from "../context/AuthContext";

export default function AuthModal({ isOpen, onClose, setModalType }) {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successColor, setSuccessColor] = useState("purple");

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
        setSuccessMessage("Cadastro Realizado!");
        setSuccessColor("pink");
        setShowSuccess(true);
      } else {
        setMessage(data.error);
      }
    } catch {
      setMessage("Erro ao conectar com o servidor");
    }
  };

  return (
    <>
      {/* Modal principal (cadastro/login) */}
      <div className="fixed inset-0 flex items-center justify-center z-40">
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        <div className="relative bg-white rounded-lg shadow-lg w-[400px] p-6 z-10">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
          >
            ✕
          </button>

            <>
              <h2 className="text-xl font-bold text-pink-600 mb-4">
                Cadastro de Usuário
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome Completo"
                  className="border p-2 rounded border-pink-500 focus:ring-pink-700"
                  required
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cpf"
                  placeholder="CPF"
                  className="border p-2 rounded border-pink-500"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="border p-2 rounded border-pink-500"
                  required
                  onChange={handleChange}
                />
                <input
                  type="cep"
                  name="cep"
                  placeholder="CEP"
                  className="border p-2 rounded border-pink-500"
                  required
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  className="border p-2 rounded border-pink-500"
                  required
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  className="border p-2 rounded border-pink-500"
                  required
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="confirmarSenha"
                  placeholder="Confirmar senha"
                  className="border p-2 rounded border-pink-500"
                  required
                  onChange={handleChange}
                />

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" required /> Aceito os termos de uso
                </label>

                <button className="bg-pink-500 text-white py-2 rounded hover:bg-pink-400 cursor-pointer">
                  Cadastrar
                </button>
              </form>
              {message && <p className="text-sm mt-2 text-red-500">{message}</p>}
              <p className="text-sm mt-3">
                Já tem conta?{" "}
                <span
                  onClick={() => { setModalType("login"); }}
                  className="text-purple-600 cursor-pointer"
                >
                 <a href="">Fazer Login</a> 
                </span>
              </p>
            </>
        </div>
      </div>

      {/* Modal de sucesso */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          onClose(); // fecha modal principal após fechar o modal de sucesso
        }}
        message={successMessage}
        color={successColor}
      />
    </>
  );
}