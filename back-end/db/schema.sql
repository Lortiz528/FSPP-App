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

CREATE TABLE consoles (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    quantity INT DEFAULT 0,
    color TEXT,
    has_box BOOLEAN,
    is_sealed BOOLEAN,
    image TEXT
);

CREATE TABLE locations (
    id SERIAL NOT NULL PRIMARY KEY,
    store_name TEXT NOT NULL,
    address TEXT NOT NULL,
    website TEXT,
    googleMapLink TEXT,
    image TEXT
);

-- CREATE TABLE users (
--     id SERIAL NOT NULL PRIMARY KEY,
--     username TEXT NOT NULL,
--     password TEXT NOT NULL,
--     email TEXT NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE userAmiibos (
--     id SERIAL NOT NULL PRIMARY KEY,
--     userID INT NOT NULL REFERENCES users(id),
--     name TEXT NOT NULL,
--     series TEXT NOT NULL,
--     is_boxed BOOLEAN,
--     quantity INT DEFAULT 0,
--     image TEXT
-- );