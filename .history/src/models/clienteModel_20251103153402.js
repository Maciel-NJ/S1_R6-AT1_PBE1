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

PROPeloId: async (pId) => {
        const sql = `SELECT * FROM produtos WHERE id_produto = ?`;
        const values = [pId]
        const [rows] = await pool.query(sql, values);
        return rows;
    
} 

};

module.exports = { clienteModel };