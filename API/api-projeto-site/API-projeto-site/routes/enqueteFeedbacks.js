var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Enquete = require('../models').Enquete;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/opinar',function(req, res, next) {
    console.log("Iniciando noticias...")
    
	
    Enquete.create({
        nota: req.body.nota,
        opiniao: req.body.opiniao
    }).then(resultado => {
        console.log("ENQUETE CADASTRADA COM SUCESSO!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
})



/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/opinar', function(req, res, next) {
	console.log('Recuperando todas as noticias');
	
    let instrucaoSql = `select truncate(avg(nota),1) as 'mediaDasNotas' from enqueteFeedback;`;

	sequelize.query(instrucaoSql, {
		model: Enquete,
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

router.get('/avaliar', function(req, res, next) {
	console.log('Recuperando todas as noticias');
	
    let instrucaoSql = `select opiniao from enqueteFeedback order by idEnquete desc;`;

	sequelize.query(instrucaoSql, {
		model: Enquete,
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
		model: Enquete,
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