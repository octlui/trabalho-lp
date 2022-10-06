//Invocamos a conexão do DB
const conexao = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const cliente = req.body.cliente;
    const local = req.body.local;
    const valor = req.body.valor;
    conexao.query(
        'INSERT INTO users(id, cliente, local, valor) VALUES($1, $2, $3, $4)',
        [GeradorID(cliente, local, valor), cliente, local, valor],
        (error, results) => {
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};

// //Atualizar o registro
exports.update = (req, res)=>{
    const id = req.body.id;
    const cliente = req.body.cliente;
    const local = req.body.local;
    const valor = req.body.valor;
    conexao.query(
        'UPDATE users SET cliente=$1, local=$2, valor=$3, id=$4  WHERE id=$4',
        [cliente, local, valor, id],
        (error, results) => {
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};

function GeradorID(cliente, local, valor) {
    return Number(cliente.toString().length) + Number(local.toString().length) + Number(valor.toString().length)
}
