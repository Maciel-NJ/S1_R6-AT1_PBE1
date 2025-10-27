const express = require('express');
const produtoRoutes=express.Router();

const {produtoController} = require('../controller/produtoController');

produtoRoutes.get('/produtos', produtoController.buscarTodosProdutos);
produtoRoutes.get('/produtos/:idProduto', produtoController.buscarProdutoPorId);
produtoRoutes.post('/produtos', produtoController.incluirProduto)


module.exports = {produtoRoutes};