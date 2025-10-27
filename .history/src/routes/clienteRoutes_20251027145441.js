const express = require('express');
const clienteRoutes=express.Router();

const {clienteController} = require('../controller/clienteController');

clienteRoutes.get('/produtos', produtoController.buscarTodosProdutos);
clie.post('/produtos', produtoController.incluirProduto);


module.exports = {clienteRoutes};