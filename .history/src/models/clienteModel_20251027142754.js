const pool = require('../config/db')

const clienteModel = {



selecionarTodos: async () => {

        const sql = 'SELECT * FROM clientes';
        const [rows] = await pool.query(sql);
        return rows;
    },

    insCliente: async (pDescricao, pValor) => {

        const sql = 'INSERT INTO produtos (descricao, valor) VALUES  (?, ?)';
        const values = [pDescricao, pValor];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },


};