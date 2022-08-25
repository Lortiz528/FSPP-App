DROP DATABASE IF EXISTS home_inventory;
CREATE DATABASE home_inventory; 

\c home_inventory; 

DROP TABLE IF EXISTS amiibos;
CREATE TABLE amiibos (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    series TEXT NOT NULL,
    is_boxed BOOLEAN,
    quantity INT DEFAULT 0,
    image TEXT
);

CREATE TABLE collections (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT
);

-- CREATE TABLE consoles (
--     id SERIALL NOT NULL PRIMARY KEY,
--     name TEXT NOT NULL,
--     brand TEXT NOT NULL,
--     quantity INT DEFAULT 0,
--     has_box BOOLEAN,
--     functioning BOOLEAN


-- )

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE userAmiibos (
    id SERIAL NOT NULL PRIMARY KEY,
    userID INT NOT NULL REFERENCES users(id),
    name TEXT NOT NULL,
    series TEXT NOT NULL,
    is_boxed BOOLEAN,
    quantity INT DEFAULT 0,
    image TEXT
);