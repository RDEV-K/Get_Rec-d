CREATE DATABASE recLTS_db;
USE recLTS_db;

CREATE TABLE Active
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(100),
    zip VARCHAR(100),
    team_id VARCHAR(100),
    touchdown VARCHAR(100),
    goals VARCHAR(100),
    score VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE User
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(100),
    zip VARCHAR(100),
    team_id VARCHAR(100),
    touchdowns VARCHAR(100),
    goals VARCHAR(100),
    score VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE League
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE Team
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    league_id VARCHAR(100),
    wins VARCHAR(100),
    losses VARCHAR(100),
    PRIMARY KEY (id)
);