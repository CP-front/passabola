const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- rota de exemplo consumindo TheSportsDB ---
app.get("/api/jogos", async (req, res) => {
  try {
    // Exemplo: buscar últimos 5 jogos da seleção feminina dos EUA
    const url = "https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=134564"; 
    
    const response = await fetch(url);
    const data = await response.json();

    // Extrair só as infos que interessam (nome, data, placar)
    const jogos = data.results.map(evento => ({
      partida: `${evento.strHomeTeam} vs ${evento.strAwayTeam}`,
      data: evento.dateEvent,
      horario: evento.strTime,
      placar: `${evento.intHomeScore} - ${evento.intAwayScore}`
    }));

    res.json(jogos);

  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    res.status(500).json({ error: "Erro ao buscar jogos" });
  }
});

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usuarios = []; // lista em memória

// rota de cadastro
app.post("/cadastro", (req, res) => {
  const { nome, cpf, email, cep, telefone, senha, confirmarSenha } = req.body;

  if (!nome || !cpf || !email || !cep || !telefone || !senha || !confirmarSenha) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  if (senha !== confirmarSenha) {
    return res.status(400).json({ error: "As senhas não conferem" });
  }

  console.log("Novo usuário cadastrado:", { nome, cpf, email, cep, telefone, senha });

  // salvar usuário em memória
  usuarios.push({ nome, cpf, email, cep, telefone, senha });
  return res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
});

// rota de login
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (usuario) {
    return res.status(200).json({ message: "Login realizado com sucesso!" });
  }
  console.log("Novo usuário logado:", { email, senha });

  return res.status(401).json({ error: "Credenciais inválidas" });
});

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
