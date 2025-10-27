const express = require('express');
const router = express.Router();

//Referencio os arquivos de rota que irei trabalhar
const {produtoRoutes} = require('./produtoRoutes');
const {clie}

router.use('/', produtoRoutes);

module.exports={router};