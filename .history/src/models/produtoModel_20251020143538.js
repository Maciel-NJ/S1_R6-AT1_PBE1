const pool = require('../config/db')

const produtoModel ={

    /**
     * Seleciona todos os produtos cadastrados na tabela
     * @async
     * @function selecionarTodos
     * @returns Retrona o reusltaod com um Array de objetos, cada objeto representa um registro da tabela
     * 
     * @example
     * const produtos = await produtoModel.selecionarTodos();
     * console.log(produtos);
     * // Saída esperada
     * 
     * [
     * 
     * {id_produto: 1, descricao: 'Teclado', valor: 150.00},
     * {id_produto: 2, descricao: 'Fone', valor: 490.00}     
     * 
     * ]
     */

//Selecionar todos os produtos
selecionarTodos: async () =>{

    const sql = 'SELECT * FROM produtos';
    const [rows] = await pool.query(sql);
    return rows
},

/**
 * Seleciona um produto de acordo com o id_produto especificado
 * @async
 * @param {number} pId Identificador que deve ser pesquisado no banco de dados
 * @returns {Promise<Array<Objectject>>}
 * 
 * @example
 * const produto = await produtoModel.selc
 */

selecionaPeloId: async (pId) => {
	const sql = `SELECT * FROM produtos WHERE id_produto = ${id}`;
    const values = [pId]
	const [rows] = await pool.query(sql, values);
	return rows;

}

};

module.exports = {produtoModel};