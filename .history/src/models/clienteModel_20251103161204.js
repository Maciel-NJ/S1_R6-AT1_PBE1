const pool = require('../config/db')

const clienteModel = {



    buscarTodos: async () => {

        const sql = 'SELECT * FROM clientes';
        const [rows] = await pool.query(sql);
        return rows;
    },

    criarCadastro: async (pNome, pCpf) => {

        const sql = 'INSERT INTO clientes (nome, cpf) VALUES  (?, ?)';
        const values = [pNome, pCpf];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },

    validacaoCpf: async (pCpf) => {
        const sql = 'SELECT * FROM clientes WHERE cpf = ?;'
        const values = [pCpf];
        const [rows] = await pool.query(sql, values);
        return rows;

    },

    buscaPeloId: async (pId) => {
        const sql = `SELECT * FROM clientes WHERE id_cliente = ?`;
        const values = [pId]
        const [rows] = await pool.query(sql, values);
        return rows;

    },

    deleteCliente: async (pId) => {
        const sql = 'DELETE FROM clientes WHERE id_cliente = ?; ';
        const values = [pId];
        const [rows] = await pool.query(sql, values);
        return rows;

    },


    alterarCliente: async (pId, pNome, pCpf) => {
        const sql = 'UPDATE produtos SET descricao=?, valor=? WHERE id_produto=?; ';
        const values = [pNom, pValor, pId];
        const [rows] = await pool.query(sql, values);
        return rows;


    }

};

module.exports = { clienteModel };