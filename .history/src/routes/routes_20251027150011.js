const express = require('express');
const router = express.Router();

//Referencio os arquivos de rota que irei trabalhar
const {produtoRoutes} = require('./produtoRoutes');
const {clienteRoutes} = require('./clienteRoutes')

router.use('/', produtoRoutes);
router.use('/', clienteRoutes); //Introdução  as rotas de cliente na middleware do servidor http

module.exports={router};