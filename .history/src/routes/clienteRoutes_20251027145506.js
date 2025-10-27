const express = require('express');
const clienteRoutes=express.Router();

const {clienteController} = require('../controller/clienteController');

clienteRoutes.get('/clientes', clienteController.);
clienteRoutes.post('/clientes', produtoController.incluirProduto);


module.exports = {clienteRoutes};