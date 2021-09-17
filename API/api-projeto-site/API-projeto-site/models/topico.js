'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

// quando criar um model, ajustar ele no arquivo app, e depois criar uma routes igual está o arquivo leitura.js

module.exports = (sequelize, DataTypes) => {
    let Topico = sequelize.define('Topico',{
		idTopico: {
			field: 'idTopico',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		titulo: {
			field: 'titulo',
			type: DataTypes.STRING,
			allowNull: false
		},
		descricaoTopico: {
			field: 'descricaoTopico',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkUsuario: {
            field: 'fkUsuario',
            type: DataTypes.INTEGER,
            allowNull: true
			// references: { model:'usuario', key:'idUsuario'}
        }
	}, 
	{
		tableName: 'topico', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Topico;
};
