const express = require('express')
// inicializar express
const app = express()

// ler requisição em json utilizando middleware
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// rotas - endpoints
// inicializando router get
app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello World API'})
})

app.post('/createproduct', (req, res) => {
    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    res.status(201).json({message: `O produto ${name} foi criado com sucesso.`})
})

app.listen(3000)