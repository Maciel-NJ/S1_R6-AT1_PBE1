const {clienteModel} = require("../models/clienteModel");

const clienteController = {


selecionarTodosCleintes: async (req, res) => {
        try {
            const resultado = await clienteModel.buscarTodos();

            if (resultado.length === 0) {
                return res.status(200).json({ message: 'A tabela selecionada não contém dados' });
            }

            res.status(200).json({ message: 'Resultado dos clientes cadastrados', data: resultado });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', errorMessage: error.message });
        }

    },




};