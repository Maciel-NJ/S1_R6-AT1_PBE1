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
const sql = 'SELECT * FROM clientes'

    }

};

module.exports = { clienteModel };