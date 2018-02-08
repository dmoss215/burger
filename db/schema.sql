CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

  id int AUTO_INCREMENT,
  burger_name varchar(155) not null,
  devoured boolean,
  primary key(id)
);