const express = require('express');
const router = express.Router();

//Referencio os arquivos de rota que irei trabalhar
const {produtoRoutes} = require('./produtoRoutes');
const {clienteRoutes} = require('./clienteRoutes')

router.use('/', produtoRoutes);
router.use()

module.exports={router};