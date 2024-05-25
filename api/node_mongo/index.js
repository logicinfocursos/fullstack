// index.js
import express from 'express'
import cors from 'cors'

import { Router } from './src/routes/router.js'

const app = express()

app.use(cors())
app.use(express.json())

const port = 3001

new Router(app)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})