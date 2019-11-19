CREATE DATABASE recLTS_db;
USE recLTS_db;

CREATE TABLE leagues
(
    id INT NOT NULL AUTO_INCREMENT,
    league_name VARCHAR(100) NOT NULL,
    league_descr VARCHAR(100) NOT NULL,
    league_season VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE teams
(
    id INT NOT NULL AUTO_INCREMENT,
    team_name VARCHAR(100) NOT NULL,
    league_name VARCHAR(100) NOT NULL,
    wins INT NOT NULL,
    losses INT NOT NULL,
    ties INT NOT NULL,
    games_played INT NOT NULL,
    stat_1 INT NOT NULL,
    stat_2 INT NOT NULL,
    stat_3 INT NOT NULL,
    stat_4 INT NOT NULL,
    stat_5 INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE players
(
    id INT NOT NULL AUTO_INCREMENT,
    player_name VARCHAR(100) NOT NULL,
    league_name VARCHAR(100) NOT NULL,
    team_name VARCHAR(100) NOT NULL,
    manager_freeAgent BOOLEAN DEFAULT false,
    stat_1 INT NOT NULL,
    stat_2 INT NOT NULL,
    stat_3 INT NOT NULL,
    stat_4 INT NOT NULL,
    stat_5 INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user_customization
(
    id INT NOT NULL AUTO_INCREMENT,
    league_name VARCHAR(100) NOT NULL,
    stat_1 INT NOT NULL,
    stat_2 INT NOT NULL,
    stat_3 INT NOT NULL,
    stat_4 INT NOT NULL,
    stat_5 INT NOT NULL,
    PRIMARY KEY (id)
);