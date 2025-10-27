const pool = require('../config/db')

const clienteModel = {



    buscarTodos: async () => {

        const sql = 'SELECT * FROM clientes';
        const [rows] = await pool.query(sql);
        return rows;
    },

    criarCadastro: async (pNome, pC) => {

        const sql = 'INSERT INTO clientes (nome, cpf) VALUES  (?, ?)';
        const values = [pNome, pCpf];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },


};

module.exports = { clienteModel };