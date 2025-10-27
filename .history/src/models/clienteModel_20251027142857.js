const pool = require('../config/db')

const clienteModel = {



selecionarTodos: async () => {

        const sql = 'SELECT * FROM clientes';
        const [rows] = await pool.query(sql);
        return rows;
    },

    criarCadastro: async (pDescricao, pValor) => {

        const sql = 'INSERT INTO produtos (nome, ) VALUES  (?, ?)';
        const values = [pDescricao, pValor];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },


};