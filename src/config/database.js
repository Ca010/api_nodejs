const {Pool} = require('pg');
const dotenv = require('dotenv');

dotenv.config();

//==> conexão com a base de dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () =>{
console.log('Base de DAdos conectado com sucesso!');
console.log('Registro inserido com sucesso');

});

module.exports = {
    query: (text, params) => pool.query(text, params),
};