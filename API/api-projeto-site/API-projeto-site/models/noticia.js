'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

// quando criar um model, ajustar ele no arquivo app, e depois criar uma routes igual está o arquivo leitura.js

module.exports = (sequelize, DataTypes) => {
    let Noticia = sequelize.define('Noticia',{
		idNoticias: {
			field: 'idNoticias',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		dataNoticia: {
			field: 'dataNoticia',
			type: DataTypes.NOW,
			allowNull: true
		},
		conteudo: {
			field: 'conteudo',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkAdm: {
			field: 'fkAdm',
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, 
	{
		tableName: 'noticias', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Noticia;
};
