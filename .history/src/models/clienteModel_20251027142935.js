const pool = require('../config/db')

const clienteModel = {



selecionarTodos: async () => {

        const sql = 'SELECT * FROM clientes';
        const [rows] = await pool.query(sql);
        return rows;
    },

    criarCadastro: async (pNome, pCPF) => {

        const sql = 'INSERT INTO produtos (nome, CPF) VALUES  (?, ?)';
        const values = [pNome, pValor];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },


};