const pool = require('../config/db')

const produtoModel ={

//Selecionar todos os produtos
selecionarTodos: async () =>{

    const sql = 'SELECT * FROM produtos';
    const [rows] = await pool.query(sql);
    return rows
},

const selecionaPorID = async (id) => {
	const sql = `SELECT * FROM produtos WHERE id_produto = ${id}`;
	const [rows] = await pool.query(sql, id);
	return rows;

};

module.exports = {produtoModel};