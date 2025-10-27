const {produtoModel} = require("../models/produtoModel");

const produtoController = {

/**
 * Retorna todos os produtos cadastrados no banco de dados
 * Rota: GET /produtos
 * @async
 * @function buscarTodosProdutos
 * @param {*} req Objeto da requisição HTTP
 * @param {*} res Objeto da resposta HTTP
 * @returns {Promise<Array<Object>>} Conteudo com os dados da requisição
 */

    buscarTodosProdutos: async (req, res) => {
        try {
            const resultado = produtoModel.selecionarTodos();

            if (resultado.length === 0 ){
                return res.status(200).json({message: 'A tabela selecionada não contém dados'});
            }

            res.status(200).json({message: 'Resultado dos dados listados', data: resultado});
        } 
        catch (error) {
           console.error(error);
           res.status(500).json({message: 'Ocorreu um erro no servidor.', errorMessage: error.message});
        }

    };


buscarProdutoPorId: async(req, res) =>{
    console.error(error);
    res.

}

};



module.exports = {produtoController};