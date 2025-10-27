const {produtoModel} = require("../models/produtoModel");

const produtoController = {
    buscarTodosProdutos: async (req, res) => {
        try {
            
        } catch (error) {
           console.error(error);
           res.statu(500).json({message: }) 
        }

    }

}



module.exports = {produtoController};