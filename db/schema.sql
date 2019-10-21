CREATE DATABASE burger_db
USE burger_db

CREATE TABLE burgers (
    id INT NOT NULL,
    burger_name VARCHAR NOT NULL,
    devoured BOOLEAN 0,
    PRIMARY KEY(id)
);