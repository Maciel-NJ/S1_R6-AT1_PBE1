const pool = require('../config/db')

const clienteModel = {



selecionarTodos: async () => {

        const sql = 'SELECT * FROM produtos';
        const [rows] = await pool.query(sql);
        return rows;
    },


};