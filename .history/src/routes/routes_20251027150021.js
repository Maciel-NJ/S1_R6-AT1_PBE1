const express = require('express');
const router = express.Router();

//Referencio os arquivos de rota que irei trabalhar
const {produtoRoutes} = require('./produtoRoutes');
const {clienteRoutes} = require('./clienteRoutes')//Introdução das rotas de cliente na middleware do servidor http


router.use('/', produtoRoutes);
router.use('/', clienteRoutes); //Introdução das rotas de cliente na middleware do servidor http

module.exports={router};