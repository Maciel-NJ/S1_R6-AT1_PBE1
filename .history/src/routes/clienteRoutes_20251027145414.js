const express = require('express');
const clienteRoutes=express.Router();

const {clienteController} = require('../controller/clienteController');

produtoRoutes.get('/produtos', produtoController.buscarTodosProdutos);

produtoRoutes.post('/produtos', produtoController.incluirProduto);


module.exports = {clienteRoutes};