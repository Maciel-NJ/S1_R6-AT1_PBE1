const express = require('express');
const clienteRoutes = express.Router();

const {clienteController} = require('../controller/clienteController');

clienteRoutes.get('/clientes', clienteController.selecionarTodosCleintes);
clienteRoutes.post('/clientes', clienteController.adicionarCliente);
clienteRoutes.put('/clientes/:idCliente', clienteController.atualizarProduto);
clienteRoutes.delete('/clientes/:idCliente', clienteController.excluirProduto);


module.exports = {clienteRoutes};