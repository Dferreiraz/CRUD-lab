const express = require ('express')
const loggerMiddleware = require ('./middlewares/loggerMiddleware')
const bookRoutes = require('./routes/bookRoutes')

const app = express()
const PORT = 3000

app.use(loggerMiddleware)
app.use(express.json())

app.use('/api/books', bookRoutes)

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`)
})