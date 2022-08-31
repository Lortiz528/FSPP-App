
\c dds5pdv68svi12;

DROP TABLE IF EXISTS amiibos;
CREATE TABLE amiibos (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    series TEXT NOT NULL,
    is_boxed BOOLEAN,
    quantity INT DEFAULT 0,
    image TEXT
);

DROP TABLE IF EXISTS collections;
CREATE TABLE collections (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT
);

DROP TABLE IF EXISTS consoles;
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
DROP TABLE IF EXISTS locations;
CREATE TABLE locations (
    id SERIAL NOT NULL PRIMARY KEY,
    store_name TEXT NOT NULL,
    address TEXT NOT NULL,
    website TEXT,
    googleMapLink TEXT
);

-- DROP TABLE IF EXISTS users;
-- CREATE TABLE users (
--     id SERIAL NOT NULL PRIMARY KEY,
--     username TEXT NOT NULL,
--     password TEXT NOT NULL,
--     email TEXT NOT NULL,
--     created_at TIMESTAMP DEFAULT NOW()
-- );

-- DROP TABLE IF EXISTS userAmiibos;
-- CREATE TABLE userAmiibos (
--     id SERIAL NOT NULL PRIMARY KEY,
--     userID INT NOT NULL REFERENCES users(id),
--     name TEXT NOT NULL,
--     series TEXT NOT NULL,
--     is_boxed BOOLEAN,
--     quantity INT DEFAULT 0,
--     image TEXT
-- );