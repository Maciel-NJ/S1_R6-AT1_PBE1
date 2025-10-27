const pool = require('../config/db')

const produtoModel ={

//Selecionar todos os produtos
selecionarTodos: async () =>{

    const sql = 'SELECT * FROM produtos';
    const [rows] = await pool.query(sql)
}

};

module.exports = {produtoModel};