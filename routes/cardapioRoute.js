const express = require('express')
const cardapioController = require('../controllers/cardapioController')

let route = express.Router()

route.get('/cadastrar/:pizza/:preco', (req, res) =>{
    res.send(`Cadastrou pizza com sucesso!`)
})

route.get('/ver', cardapioController.listarCardapio)

module.exports = route