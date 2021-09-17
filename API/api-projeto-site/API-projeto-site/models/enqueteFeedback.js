'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

// quando criar um model, ajustar ele no arquivo app, e depois criar uma routes igual está o arquivo leitura.js

module.exports = (sequelize, DataTypes) => {
    let Enquete = sequelize.define('Enquete',{
		idEnquete: {
			field: 'idEnquete',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nota: {
			field: 'nota',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		opiniao: {
			field: 'opiniao',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'enqueteFeedback', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Enquete;
};
