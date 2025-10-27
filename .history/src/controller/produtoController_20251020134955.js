const {produtoModel} = require("../models/produtoModel");

const produtoController = {
    buscarTodosProdutos: async (req, res) => {
        try {
            const resultado = produto
        } catch (error) {
           console.error(error);
           res.statu(500).json({message: 'Ocorreu um erro no servidor.', errorMessage: error.message}) ;
        }

    }

}



module.exports = {produtoController};