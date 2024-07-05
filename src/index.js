require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', async (rsq, res) => {
    return res.json('Api está OK!')
})

const port = process.env.PORT || 3000

app.listen(process.env.PORT, () => {
    console.log(`Servidor em pé na porta ${process.env.PORT}`)
})