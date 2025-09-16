import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rota de cadastro
app.post("/cadastro", (req, res) => {
  const { nome, cpf, email, telefone, senha, confirmarSenha } = req.body;

  if (!nome || !cpf || !email || !telefone || !senha || !confirmarSenha) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  if (senha !== confirmarSenha) {
    return res.status(400).json({ error: "As senhas não conferem" });
  }

  // aqui você poderia salvar no banco de dados
  console.log("Novo usuário cadastrado:", { nome, cpf, email, telefone });

  return res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
});

// rota de login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  // validação fake
  if (email === "teste@email.com" && senha === "123456") {
    return res.status(200).json({ message: "Login realizado com sucesso!" });
  }

  return res.status(401).json({ error: "Credenciais inválidas" });
});

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
