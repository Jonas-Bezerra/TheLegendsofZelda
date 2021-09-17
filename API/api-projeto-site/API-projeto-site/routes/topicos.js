var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Topico = require('../models').Topico;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/recuperar/:idUsuario',function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idUsuario = req.params.idUsuario;
	
    Topico.create({
        titulo: req.body.titulo,
        descricaoTopico: req.body.descricaoTopico,
        fkUsuario: idUsuario
    }).then(resultado => {
        console.log("USUÁRIO CADASTRADO COM SUCESSO!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
})



/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/recuperar', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
    let instrucaoSql = `SELECT t.titulo, t.descricaoTopico,
	 u.idUsuario, u.apelido
	FROM topico AS t
        INNER JOIN usuario AS u ON
		 u.idUsuario = t.fkUsuario
        ORDER BY t.idTopico DESC;`;

	sequelize.query(instrucaoSql, {
		model: Topico,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
router.get('/:idUsuario', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
	var idUsuario = req.params.idUsuario;

    let instrucaoSql = `SELECT 
    usuario.nome,
    descricao
    FROM publicacao
    INNER JOIN usuario
    ON Publicacao.fkUsuario = Usuario.id
    WHERE fkUsuario = ${idUsuario}
    ORDER BY publicacao.id DESC`;

	sequelize.query(instrucaoSql, {
		model: Publicacao,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;