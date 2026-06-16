const knex = require('knex');
const config = require('../../knexfile');

const db = knex(config.development);
module.exports = db;

//Inicializa a conexão com o banco de dados. Importa as
//configurações definidas no knexfile.js
