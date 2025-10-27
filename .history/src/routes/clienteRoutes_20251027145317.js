const express = require('express');
const clienteRoutes=express.Router();

const {clienteC = require('../controller/clienteController');

produtoRoutes.get('/produtos', produtoController.buscarTodosProdutos);
produtoRoutes.get('/produtos/:idProduto', produtoController.buscarProdutoPorId);
produtoRoutes.post('/produtos', produtoController.incluirProduto);
produtoRoutes.put('/produtos/:idProduto', produtoController.atualizarProduto);
produtoRoutes.delete('/produtos/:idProduto', produtoController.excluirProduto);

module.exports = {produtoRoutes};