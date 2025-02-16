const express = require("express")
require("dotenv").config()

const CORRECT_PASSWORD = process.env.PASSWORD

const app = express()
const PORT = process.env.PORT

app.use(express.json())

// 🏠 Rota principal (exibe uma mensagem na tela)
app.get("/", (req, res) => {
    res.send(`
        <p>Hello, World!</p>
    `)
})

// 🏠 Rota da verificação de senha (exibe uma mensagem na tela)
app.get("/verificar-senha", (req, res) => {
    res.send(`
        <p>Esperando requisição...</p>
    `)
})

// Rota de verificação de senha
app.post("/verificar-senha", (req, res) => {
    const { senha } = req.body

    if (senha === CORRECT_PASSWORD) {
        return res.status(200).json({ message: "Senha correta" })
    } else {
        return res.status(400).json({ message: "Senha incorreta" })
    }
})

// Iniciar o servidor
const BASE_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando em ${BASE_URL}`);
})
