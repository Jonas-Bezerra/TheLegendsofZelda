var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Noticia = require('../models').Noticia;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/noticiar/:idUsuario',function(req, res, next) {
    console.log("Iniciando noticias...")
    
	let idUsuario = req.params.idUsuario;
	
    Noticia.create({
        conteudo: req.body.conteudo,
        fkAdm: idUsuario
    }).then(resultado => {
        console.log("NOTICIA CADASTRADa COM SUCESSO!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
})



/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/noticiar', function(req, res, next) {
	console.log('Recuperando todas as noticias');
	
    let instrucaoSql = `select dataNoticia, conteudo from noticias as n order by dataNoticia desc;`;

	sequelize.query(instrucaoSql, {
		model: Noticia,
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
		model: Noticia,
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