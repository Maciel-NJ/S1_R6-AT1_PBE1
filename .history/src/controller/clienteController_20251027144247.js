const {clienteModel} = require("../models/clienteModel");

const clienteController = {


selecionarTodosCleintes: async (req, res) => {
        try {
            const resultado = await clienteModel.buscarTodos();

            if (resultado.length === 0) {
                return res.status(200).json({ message: 'A tabela selecionada não contém dados' });
            }

            res.status(200).json({ message: 'Resultado dos clientes cadastrados:', data: resultado });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor :( ', errorMessage: error.message });
        }

    },



    incluir: async (req, res) => {

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

    }




};