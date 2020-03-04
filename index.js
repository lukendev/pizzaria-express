const express = require('express')

let rotasUsuario = require('./routes/usuarioRoute')
let rotasCardapio = require('./routes/cardapioRoute')

let app = express()

app.get('/', (req, res) =>{
    res.send('Voce está no sistema Pizzaria-Express')
})

app.use('/cardapio', rotasCardapio)
app.use('/usuarios', rotasUsuario)

app.listen(3000, () => console.log("Servidor rodando perfeitamente"))