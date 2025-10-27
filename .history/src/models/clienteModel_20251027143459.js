const pool = require('../config/db')

const clienteModel = {



buscarTodos: async () => {

        const sql = 'SELECT * FROM clientes';
        const [rows] = await pool.query(sql);
        return rows;
    },

    criarCadastro: async (pNome, pCPF) => {

        const sql = 'INSERT INTO clientes (nome, CPF) VALUES  (?, ?)';
        const values = [pNome, pCPF];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },


};

module.exports = { produtoModel };