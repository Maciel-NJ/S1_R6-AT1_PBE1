const express = require('express');
const clienteRoutes=express.Router();

const {clienteController} = require('../controller/clienteController');

clienteRoutes.get('/clientes', produtoController.buscarTodosProdutos);
clienteRoutes.post('/clientes', produtoController.incluirProduto);


module.exports = {clienteRoutes};