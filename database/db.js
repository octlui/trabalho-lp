const Client = require('pg').Client;

const conexao = new Client({
    user: "luiza", 
    password: "senha", 
    host: "localhost", 
    port: 5432,
    database: "postgres"
});

conexao.connect((error)=> {
    if (error) {
        console.error('A conexao deu erro' + error);
        return;
    }
    console.log('Conectado com sucesso');
}
);

module.exports = conexao;