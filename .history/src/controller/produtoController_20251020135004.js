const {produtoModel} = require("../models/produtoModel");

const produtoController = {
    buscarTodosProdutos: async (req, res) => {
        try {
            const resultado = produtoModel.selecionarTodos()
        } catch (error) {
           console.error(error);
           res.statu(500).json({message: 'Ocorreu um erro no servidor.', errorMessage: error.message}) ;
        }

    }

}



module.exports = {produtoController};