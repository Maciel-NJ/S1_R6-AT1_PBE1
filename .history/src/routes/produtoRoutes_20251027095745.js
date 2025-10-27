const express = require('express');
const produtoRoutes=express.Router();

const {produtoController} = require('../controller/produtoController');

produtoRoutes.get('/produtos', produtoController.buscarTodosProdutos);
produtoRoutes.get('/produtos/:id', produtoController.buscarProdutoPorId);
produtoRoutes.post('/produtos', produtoController.incluirProduto);
produtoRoutes.put('/produtos/:idProduto', produtoController.atualizarProduto)


module.exports = {produtoRoutes};