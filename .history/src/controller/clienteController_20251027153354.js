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

            const resultado = await clienteModel.criarCadastro(nome, cpf);

            if (resultado.affectedRows === 1 && resultado.insertId != 0) {
                res.status(200).json({ message: 'Cliente incluído com sucesso', result: resultado })
            } else {

                throw new Error('Ocorreu um erro ao tentar cadastrar o cliente :( ');
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor :( ', errorMessage: error.message });
            return res.status(409).json({message: 'Este CPF já está em uso por outro cliente'})
        }

    }




};

module.exports = { clienteController };