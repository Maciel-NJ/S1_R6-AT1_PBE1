const pool = require('../config/db')

const clienteModel = {



selecionarTodos: async () => {

        const sql = 'SELECT * FROM ';
        const [rows] = await pool.query(sql);
        return rows;
    },


};