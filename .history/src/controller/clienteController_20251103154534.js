const { clienteModel } = require("../models/clienteModel");

const clienteController = {


    selecionarTodosCleintes: async (req, res) => {
        try {
            const resultado = await clienteModel.buscarTodos();

            if (resultado.length === 0) {
                return res.status(200).json({ message: 'A tabela selecionada não contém dados' });
            }

            res.status(200).json({ message: 'Todos os clientes cadastrados:', data: resultado });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor :( ', errorMessage: error.message });
        }

    },



    adicionarCliente: async (req, res) => {

        try {
            const { nome, cpf } = req.body;

            if (!String(nome) || nome.length < 3 || cpf.length !== 11) {
                return res.status(400).json({ message: 'Dados inválidos!' });

            }

            const cpfEmUso = await clienteModel.validacaoCpf(cpf);
            if (cpfEmUso.length > 0) {
                return res.status(409).json({message:'Este CPF já está sendo usado por um cliente'});
            }

            const resultado = await clienteModel.criarCadastro(nome, cpf);

            if (resultado.affectedRows === 1 && resultado.insertId != 0) {
                res.status(200).json({ message: 'Cliente incluído com sucesso', result: resultado })
            } 
            
            
            
            else {

                throw new Error('Ocorreu um erro ao tentar cadastrar o cliente :( ');
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor :( ', errorMessage: error.message });
        }

    },


    excluirCliente: async (req, res) => {
        try {
            const id = Number(req.params.idCliente);

            if (!id || !Number.isInteger(id)) {
                return res.status(400).json({ message: 'Forneça um ID válido' });
            }

            const clienteSelecionado = await clienteModel.buscaPeloId(id);
        
            if (clienteSelecionado.length === 0) {
                throw new Error('Não conseguimos localizar o cliente para exclusão');
            }
            else {

                const resultado = await clienteModel.deleteCliente(id);
                if (resultado.affectedRows === 1) {
                    res.status(200).json({ message: 'Cliente apagado com sucesso!', data: resultado });
                }
                else {
                    throw new Error('Não foi possível excluir o cliente'); 
                }

            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor :(', errorMessage: error.message });
        }
    },

     buscarClientePorId: async (req, res) => {
        try {
            const id = Number(req.params.idCliente);
            if (!id || !Number.isInteger(id)) {
                return res.status(400).json({ message: 'Informe um ID válido!' });
            }
            const resultado = await clienteModel.buscaPeloId(id);
            res.status(200).json({ message: 'Resultado do cliente procurado:', data: resultado });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor :(', errorMessage: error.message });
        }
    },




    atualizarCliente: async (req, res) => {
        try {
            const idCliente = Number(req.params.idCliente);
            let { nome, cpf } = req.body;

            nome = descricao.trim();

            if (!idProduto || !descricao || !valor || typeof idProduto !== 'number' || !isNaN(descricao) || isNaN(valor) || descricao.trim().length < 3) {
                return res.status(400), json({ message: 'Verifique os dados enviados e tente novamente' });

            }

            const produtoAtual = await produtoModel.selecionaPeloId(idProduto);
            if (produtoAtual.length === 0) {
                throw new Error('Registro não localizadoo')
            }

            const novaDescricao = descricao ?? produtoAtual[0].descricao;
            const novoValor = valor ?? produtoAtual[0].valor;

            const resultado = await produtoModel.alterarProduto(idProduto, novaDescricao, novoValor)

            if (resultado.changedRows === 0) {
                throw new Error('Ocorreu um erro ao atualizar o produto');

            }

            res.status(200).json({ message: 'Registro atualizado com sucesso', data: resultado });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })


        }
    }



};

module.exports = { clienteController };