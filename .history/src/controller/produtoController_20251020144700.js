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

    },


buscarProdutoPorId: async(req, res) =>{
    try{
        const id = Number(req.params.idProduto);
        if (!id || !Number.isInteger(id)){
            return res.status(400).json({message: 'Informe um identificado (ID) válido'})
        }

    }catch (error) {
    console.error(error);
    res.status(500).json({message: 'Ocorreu um erro no servidor.', errorMessage: error.message});
    }
}

};



module.exports = {produtoController};