import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/passaBola", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema Usuário
const userSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  email: { type: String, unique: true },
  telefone: String,
  senha: String,
});

const User = mongoose.model("User", userSchema);

// Rota de Cadastro
app.post("/api/cadastro", async (req, res) => {
  try {
    const { nome, cpf, email, telefone, senha } = req.body;

    // Verifica se já existe email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "E-mail já cadastrado!" });
    }

    // Criptografa senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = new User({
      nome,
      cpf,
      email,
      telefone,
      senha: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
});

// Rota de Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Senha incorreta" });
    }

    res.json({ message: "Login realizado com sucesso", user });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`🚀 Server rodando em http://localhost:${PORT}`);
});
