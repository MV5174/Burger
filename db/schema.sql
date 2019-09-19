DROP DATABASE burgers_db
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);