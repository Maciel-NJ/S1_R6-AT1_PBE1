const { produtoModel } = require("../models/produtoModel");

const produtoController = {

    /**
     * Retorna todos os produtos cadastrados no banco de dados
     * Rota: GET /produtos
     * @async
     * @function buscarTodosProdutos
     * @param {Request} req Objeto da requisição HTTP
     * @param {Response} res Objeto da resposta HTTP
     * @returns {Promise<Array<Object>>} Conteudo com os dados da requisição
     */

    buscarTodosProdutos: async (req, res) => {
        try {
            const resultado = produtoModel.selecionarTodos();

            console.log(resultado)
            if (resultado.length === 0) {
                return res.status(200).json({ message: 'A tabela selecionada não contém dados' });
            }

            res.status(200).json({ message: 'Resultado dos dados listados', data: resultado });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', errorMessage: error.message });
        }

    },


    /**
     * Retorna o produto referente ao id_produto pesquisado
     * Rota: GET /proutos/:idProduto
     * @async 
     * @function buscarProdutoPorId
     * @param {Request} req Objeto da requisição HTTP
     * @param {Response} res Objeto da resposta HTTP
     * @returns {Promisse<Array<Object>>} Retorna objeto contendo os dados do produto pesquisado
     */

    buscarProdutoPorId: async (req, res) => {
        try {
            const id = Number(req.params.idProduto);
            if (!id || !Number.isInteger(id)) {
                return res.status(400).json({ message: 'Informe um identificado (ID) válido!' });
            }
            const resultado = await produtoModel.selecionaPeloId(id);
            res.status(200).json({ message: 'Resultado dos dados listados', data: resultado });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', errorMessage: error.message });
        }
    },

    /**
     * Cria um novo item na base de dados
     * @param {Request} req Objeto da requisição HTTP
     * @param {Response} res Objeto da resposta HTTP
     * @function incluirProduto
     * @returns {Promise<Object>>} Retorna objeto contendo as informações sobre o resultado do insert
     */

    incluirProduto: async (req, res) => {

        try {
            const { descricao, valor } = req.body;

            if (!String(descricao) || descricao.length < 3 || valor <= 0) {
                return res.status(400).json({ message: 'Dados inválidos!' });

            }

            const resultado = await produtoModel.inserirProduto(descricao, valor);

            if (resultado.affectedRows === 1 && resultado.insertId != 0) {
                res.status(201).json({ message: 'Registro incluído com sucesso', result: resultado })
            } else {

                throw new Error('Ocorreu um erro ao incluir o registro!');
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor!', errorMessage: error.message });

        }

    },

    atualizarProduto: async (req, res) => {
        try {
            const idProduto = req.params;
            const { descricao, valor } = req.body;

            if (!idProduto || !descricao || !valor || typeof idProduto !== 'number' || !isNaN(descricao) || isNaN(valor) || descricao.trim().length < 3) {
                return res.status(400), json({ message: 'Verifique os dados enviados e tente novamente' });

            }

            const produtoAtual = await produtoModel.selecionaPeloId(idProduto);
            if(produtoAtual.length === 0)

            const novaDescricao = descricao ?? produtoAtual[0].descricao;
            const novoValor = valor ?? produtoAtual[0].valor;

            const resultado = await produtoModel.alterarProduto(idProduto, novaDescricao, novoValor)

            if (resultado.changedRows === 0){
                throw new Error ('Ocorrrei um erro ao atualizar o produto');

                res.status(200).json({message:'Registro atualizado com sucesso', data: resultado});
                
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })


        }
    }

};



module.exports = { produtoController };