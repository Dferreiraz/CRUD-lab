const express = require('express')
const loggerMiddleware = require('./middlewares/loggerMiddleware')
const taskRoutes = require('./routes/taskRoutes')

const app = express()
const PORT = 3000

app.use(loggerMiddleware)
app.use(express.json())

app.use('/api/tasks', taskRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
}) 