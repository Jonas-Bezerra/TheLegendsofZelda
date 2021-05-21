create database zelda;

use zelda;

create table enqueteFeedback(
idEnquete int primary key auto_increment,
nota int,
opiniao varchar(45)
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
dataNoticia datetime,
conteudo varchar(200),
fkAdm int,
foreign key (fkAdm) references usuario (idUsuario)
);

create table topico(
idTopico int primary key auto_increment,
titulo varchar(45),
dataTopico datetime,
descricaoTopico varchar(200)
);

create table comentario(
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
fkTopico int,
foreign key (fkTopico) references topico(idTopico),
dataPost datetime,
counteudo varchar(150),
primary key (fkUsuario, fkTopico)
);

update usuario set adm = 'true' where idUsuario = 2;

select * from usuario;

