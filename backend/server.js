import express from "express"
import fs from "fs"
import path from "path"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({ quiet: true })

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// =========================================
// CONFIGURAÇÃO DO JWT
// =========================================
const SECRET_KEY = process.env.JWT_SECRET || "12345678910"

// =========================================
// CONFIGURAÇÃO DOS ARQUIVOS DE DADOS
// =========================================
const __dirnamePath = path.resolve()
const dataDir = path.join(__dirnamePath, "data")
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)

const localDados = path.join(dataDir, "usuarios.json")
if (!fs.existsSync(localDados)) fs.writeFileSync(localDados, "[]")

// =========================================
// Funções utilitárias de leitura/escrita
// =========================================
const readJSON = (filename) => {
  const filePath = path.join(dataDir, filename)

  try {
    const data = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error(`[FileHandler] ERRO: Não foi possível ler o arquivo em ${filePath}.`, error)
    return []
  }
}

const writeJSON = (filename, data) => {
  const filePath = path.join(dataDir, filename)

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8")
    return true
  } catch (error) {
    console.error(`[FileHandler] ERRO: Não foi possível escrever no arquivo em ${filePath}.`, error)
    return false
  }
}

// =========================================
// ROTA EXEMPLO - CONSUMO DE API
// =========================================
app.get("/api/jogos", async (req, res) => {
  try {
    const url = "https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=136824"
    const response = await fetch(url)
    const data = await response.json()

    const jogos = data.results.map((evento) => ({
      partida: `${evento.strHomeTeam} vs ${evento.strAwayTeam}`,
      data: evento.dateEvent,
      horario: evento.strTime,
      placar: `${evento.intHomeScore} - ${evento.intAwayScore}`,
    }))

    res.json(jogos)
  } catch (error) {
    console.error("Erro ao buscar jogos:", error)
    res.status(500).json({ error: "Erro ao buscar jogos" })
  }
})

// =========================================
// ROTA DE CADASTRO
// =========================================
app.post("/cadastro", async (req, res) => {
  try {
    const { nome, cpf, email, cep, telefone, posicao, senha, confirmarSenha } = req.body

    if (!nome || !cpf || !email || !cep || !telefone || !posicao || !senha || !confirmarSenha) {
      return res.status(400).json({ error: "Preencha todos os campos" })
    }

    const usuarios = readJSON("usuarios.json")

    if (usuarios.find((user) => user.email === email)) {
      return res.status(400).json({ message: "Este email já está em uso" })
    }

    if (senha !== confirmarSenha) {
      return res.status(400).json({ error: "As senhas não conferem" })
    }

    const hashSenha = await bcrypt.hash(senha, 10)

    const novoUsuario = {
      id: Date.now().toString(),
      nome,
      cpf,
      email,
      cep,
      telefone,
      posicao,
      senha: hashSenha,
    }

    usuarios.push(novoUsuario)
    writeJSON("usuarios.json", usuarios)

    console.log(`[Auth] Novo usuário registrado: ${nome} (${email})`)

    return res.status(201).json({
      message: "Usuário registrado com sucesso",
      user: { id: novoUsuario.id, nome: novoUsuario.nome, email: novoUsuario.email },
    })
  } catch (error) {
    console.error("[Auth] ERRO NO CADASTRO:", error)
    return res.status(500).json({ error: "Erro interno ao cadastrar usuário" })
  }
})

// =========================================
// ROTA DE LOGIN
// =========================================
app.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body
    const usuarios = readJSON("usuarios.json")
    const user = usuarios.find((u) => u.email === email)

    if (!user) {
      return res.status(400).json({ message: "Usuário/senha inválidos" })
    }

    const senhaValida = await bcrypt.compare(senha, user.senha)
    if (!senhaValida) {
      return res.status(400).json({ message: "Senha inválida" })
    }

    const token = jwt.sign({ id: user.id, nome: user.nome, email: user.email }, SECRET_KEY, {
      expiresIn: "10m",
    })

    console.log(`[Auth] Login bem-sucedido: ${user.email}`)

    res.json({
      message: "Login realizado com sucesso",
      token,
      user: { id: user.id, nome: user.nome, email: user.email },
    })
  } catch (error) {
    console.error("[Auth] ERRO NO LOGIN:", error)
    res.status(500).json({ error: "Erro interno ao fazer login" })
  }
})

// =========================================
// 🚀 INICIAR SERVIDOR
// =========================================
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
