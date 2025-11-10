const express = require('express');
const clienteRoutes = express.Router();

const {clienteController} = require('../controller/clienteController');

clienteRoutes.get('/clientes', clienteController.selecionarTodosCleintes);
clienteRoutes.post('/clientes', clienteController.adicionarCliente);
clienteRoutes.put('/produtos/:idProduto', produtoController.atualizarProduto);
produtoRoutes.delete('/produtos/:idProduto', produtoController.excluirProduto);


module.exports = {clienteRoutes};