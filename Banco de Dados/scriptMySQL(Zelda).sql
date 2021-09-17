create database zelda;

use zelda;

create table enqueteFeedback(
idEnquete int primary key auto_increment,
nota int,
opiniao varchar(200)
);

create table usuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
email varchar(45),
senha varchar(45),
cidade varchar(45),
apelido varchar(50),
adm varchar(5) default 'false',
check (adm = 'true' or adm = 'false'),
logradouro varchar(45),
uf char(2),
bairro varchar(45),
fkEnquete int,
foreign key (fkEnquete) references enqueteFeedback (idEnquete)
);

create table noticias(
idNoticias int primary key auto_increment,
dataNoticia datetime default current_timestamp,
conteudo varchar(200),
fkAdm int,
foreign key (fkAdm) references usuario (idUsuario)
);

create table topico(
idTopico int primary key auto_increment,
titulo varchar(45) not null,
dataTopico datetime default current_timestamp,
descricaoTopico varchar(500) not null,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario)
);
alter table topico modify column titulo varchar(45) not null;

delete from topico where idTopico > 7;

-- select para tornar um usuário em administrador
update usuario set adm = 'true' where idUsuario > 7;

select * from usuario;
select * from noticias;
select * from topico;
select * from enqueteFeedback;

desc noticias;

select dataNoticia, conteudo from noticias as n order by dataNoticia desc;

SELECT t.titulo, t.dataTopico, t.descricaoTopico
	FROM topico AS t
    ORDER BY t.idTopico DESC;

select opiniao, truncate(avg(nota),1) as 'mediaDasNotas' from enqueteFeedback;

select * from enqueteFeedback;

select opiniao from enqueteFeedback order by idEnquete desc;