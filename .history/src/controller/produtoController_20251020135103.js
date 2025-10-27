const {produtoModel} = require("../models/produtoModel");

const produtoController = {
    buscarTodosProdutos: async (req, res) => {
        try {
            const resultado = produtoModel.selecionarTodos();
            if (resultado.length === 0 ){
                return.status(200).json({message})
            }
        } catch (error) {
           console.error(error);
           res.status(500).json({message: 'Ocorreu um erro no servidor.', errorMessage: error.message}) ;
        }

    }

}



module.exports = {produtoController};