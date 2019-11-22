CREATE DATABASE recLTS_db;
USE recLTS_db;

CREATE TABLE user
{
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    zipcode INT NOT NULL,
    PRIMARY KEY (id)
};

CREATE TABLE stats_recorded
{
    id INT NOT NULL AUTO_INCREMENT,
    league_id INT NOT NULL,
    team_id INT NOT NULL,
    user_id INT NOT NULL,
    stat_id INT NOT NULL,
    stat INT NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (league_id) REFERENCES leagues(id)
    FOREIGN KEY (team_id) REFERENCES teams(id)
    FOREIGN KEY (user_id) REFERENCES user(id)
    FOREIGN KEY (stat_id) REFERENCES stats_defined(id)
};

CREATE TABLE stats_defined
{
    id INT NOT NULL AUTO_INCREMENT,
    stat_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
};

CREATE TABLE leagues
(
    id INT NOT NULL AUTO_INCREMENT,
    league_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE teams
(
    id INT NOT NULL AUTO_INCREMENT,
    team_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);