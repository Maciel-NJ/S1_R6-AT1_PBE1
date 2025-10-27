const express = require('express');
const produtoRoutes=express.Router();

const {produtoController} = require('../controller/produtoController');

produtoRoutes.get('')