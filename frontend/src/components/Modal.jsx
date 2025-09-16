import { useState } from "react";

export default function AuthModal({ isOpen, onClose, type, setModalType }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fundo com blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Caixa do modal */}
      <div className="relative bg-white rounded-lg shadow-lg w-[400px] p-6 z-10">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
        >
          ✕
        </button>

        {type === "login" ? (
          <>
            <h2 className="text-xl font-bold text-purple-600 mb-4">Login</h2>
            <form method="POST" action="http://localhost:5000/login" className="flex flex-col gap-3">
              <input type="email" name="email" placeholder="E-mail" className="border p-2 rounded border-purple-500" required />
              <input type="password" name="senha" placeholder="Senha" className="border p-2 rounded border-purple-500" required />
              <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-800 cursor-pointer">
                Entrar
              </button>
            </form>
            <p className="text-sm mt-3">
              Não tem conta?{" "}
              <span 
                onClick={() => setModalType("register")}
                className="text-pink-600 cursor-pointer"
              >
                Cadastre-se
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-pink-600 mb-4">Cadastro de Usuário</h2>
            <form method="POST" action="http://localhost:5000/cadastro" className="flex flex-col gap-3">
              <input type="text" name="nome" placeholder="Nome Completo" className="border p-2 rounded border-pink-500" required />
              <input type="text" name="cpf" placeholder="CPF" className="border p-2 rounded border-pink-500" required />
              <input type="email" name="email" placeholder="E-mail" className="border p-2 rounded border-pink-500" required />
              <input type="tel" name="telefone" placeholder="Telefone" className="border p-2 rounded border-pink-500" required />
              <input type="password" name="senha" placeholder="Senha" className="border p-2 rounded border-pink-500" required />
              <input type="password" name="confirmarSenha" placeholder="Confirmar senha" className="border p-2 rounded border-pink-500" required />
              
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" required /> Aceito os termos de uso
              </label>

              <button className="bg-pink-500 text-white py-2 rounded hover:bg-pink-400 cursor-pointer">
                Cadastrar
              </button>
            </form>
            <p className="text-sm mt-3">
              Já tem conta?{" "}
              <span 
                onClick={() => setModalType("login")}
                className="text-purple-600 cursor-pointer"
              >
                Fazer Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
