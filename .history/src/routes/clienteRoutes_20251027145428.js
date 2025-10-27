const express = require('express');
const clienteRoutes=express.Router();

const {clienteController} = require('../controller/clienteController');

clie.get('/produtos', produtoController.buscarTodosProdutos);
produtoRoutes.post('/produtos', produtoController.incluirProduto);


module.exports = {clienteRoutes};