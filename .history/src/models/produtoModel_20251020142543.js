const pool = require('../config/db')

const produtoModel ={

    /**
     * 
     * @function selecionarTodos
     * @returns Retrona o reusltaod com um Array de objetos, cada objeto representa um registro da tabela
     */

//Selecionar todos os produtos
selecionarTodos: async () =>{

    const sql = 'SELECT * FROM produtos';
    const [rows] = await pool.query(sql);
    return rows
},

selecionaPeloId: async (pId) => {
	const sql = `SELECT * FROM produtos WHERE id_produto = ${id}`;
    const values = [pId]
	const [rows] = await pool.query(sql, values);
	return rows;

}

};

module.exports = {produtoModel};