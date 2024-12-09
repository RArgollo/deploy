import express from 'express'

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    console.log("TESTE")
    res.send("EU MUDEI")
})

app.listen(3001, () => console.log("server rodando"))