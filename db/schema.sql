CREATE DATABASE daBurger_db;
USE daBurger_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
	name varchar
    (255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);