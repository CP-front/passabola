import { useState } from "react";
import SuccessModal from "./SucessModal";
import { useAuth } from "../components/AuthContext";

export default function AuthModal({ isOpen, onClose, setModalType }) {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successColor, setSuccessColor] = useState("purple");

  // A função 'login' agora é a versão "burra" do context
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        
        // --- A GRANDE MUDANÇA ESTÁ AQUI ---
        // 1. Verificamos se a API enviou o token e o usuário
        if (data.user && data.token) {
          
          // 2. Passamos o usuário E O TOKEN para o contexto
          // O contexto vai salvar o token e atualizar o estado global 'user'
          login(data.user, data.token); 

          // 3. Mostramos o modal de sucesso
          setSuccessMessage("Login Realizado!");
          setSuccessColor("purple");
          setShowSuccess(true);
        } else {
          // A API funcionou (response.ok) mas não enviou os dados esperados
          setMessage("Resposta do servidor inválida. Faltando usuário ou token.");
        }

      } else {
        setMessage(data.error || "Email ou senha incorretos");
      }
    } catch {
      setMessage("Erro ao conectar com o servidor");
    }
  };

  return (
    <>
      {/* Modal login */}
      <div className="fixed inset-0 flex items-center justify-center z-40">
<<<<<<< HEAD
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
            <h2 className="text-xl font-bold text-purple-600 mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="border p-2 rounded border-purple-500"
                required
                onChange={handleChange}
              />
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                className="border p-2 rounded border-purple-500"
                required
                onChange={handleChange}
              />
              <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-800 cursor-pointer">
                Entrar
              </button>
            </form>

            {message && <p className="text-sm mt-2 text-red-500">{message}</p>}

            <p className="text-sm mt-3">
              Não tem conta?{" "}
              <span
                onClick={() => setModalType("register")} // ✅ Troca o modal para cadastro
                className="text-pink-600 cursor-pointer hover:underline"
              >
                Cadastrar-se
              </span>
            </p>
          </>
        </div>
=======
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
            
            {/* ... (o resto do seu JSX do formulário, não precisa mudar) ... */}
            <>
              <h2 className="text-xl font-bold text-purple-600 mb-4">Login</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="border p-2 rounded border-purple-500"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    name="senha" // Garanta que seu backend espera 'senha' e não 'password'
                    placeholder="Senha"
                    className="border p-2 rounded border-purple-500"
                    required
                    onChange={handleChange}
                  />
                  <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-800 cursor-pointer">
                    Entrar
                  </button>
              </form>
              {message && <p className="text-sm mt-2 text-red-500">{message}</p>}
              <p className="text-sm mt-3">
                  Não tem conta?{" "}
                  <span className="text-pink-600 cursor-pointer">
                    <a href="">Cadastrar-se</a>
                  </span>
              </p>
            </>
          </div>
>>>>>>> 33a9b86364fc54698ba296798723a764422d1c44
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
