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
 * const produto = await produtoModel.selcionarPorId();
 * console.log(produto);
 * // Saída esperada
 * [
 *     {id_produto: 1, descricao: 'Teclado', valor: 150.00}
 * ]
 */

selecionaPeloId: async (pId) => {
	const sql = `SELECT * FROM produtos WHERE id_produto = ${id}`;
    const values = [pId]
	const [rows] = await pool.query(sql, values);
	return rows;

},

/**
     * Inclui um item novo no banco de dados
     * @param {string} pDescricao
     * @param {number} pValor
     * @returns {Promise<Object>>} retorna um objeto contendo propriedades que representam as informações do comando executado
     * @example
     * const produtos = await produtoModel.InserirProduto('Produto teste', 16.99);
     * //Saída
     * "result" : {
     * "fieldCount": 0,
     * "affectdRows": 1,
     * "insertId": 11,
     * "Info": "",
     * "serverStatus": 2,
     * "warningStatus": 0,
     * "changedRows": 0,
     * }
     */

inserirProduto: async(pDescricao, pValor) =>{

    const sql = 'INSERT INTO produtos (descricao, valor) VALUES  (?, ?)';
    const values = [pDescricao, pValor];
    const [rows] = await pool.query(sql, values);
    console.log(rows);
    return rows;
},

alterarProduto: async (pId, pDescricao, pValor) => {
    const sql = 'UPDATE produtos SET descricao=?, valor=? WHERE id_produto=?; ';
    const values = [pDescricao, pValor, p]


}

};

module.exports = {produtoModel};