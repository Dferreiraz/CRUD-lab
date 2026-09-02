const express = require('express')
const loggermiddleware = require('./middlewares/loggermiddleware')
const productRoutes = require('./routes/productRoutes')

const app = express()
const PORT = 3000

app.use(loggermiddleware) 
app.use(express.json())

app.use('/api/products', productRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
