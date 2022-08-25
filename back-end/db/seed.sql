\c home_inventory; 

INSERT INTO amiibos (name, series, is_boxed, quantity, image) VALUES
('Zero Suit Samus', 'Super Smash Bros.', true, 2, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_05c00100-001d0002.png'),
('Mario - Gold Edition', 'Super Mario', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003c0102.png'),
('Palutena', 'Super Smash Bros.', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_07420000-001f0002.png'),
('Pit', 'Super Smash Bros.', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_07400000-00100002.png'),
('Ike', 'Super Smash Bros.', false, 2, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_21010000-00180002.png'),
('Resetti', 'Animal Crossing', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_018e0000-02490502.png');

INSERT INTO collections (name, image) VALUES ('Amiibos', 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/amiibo/amiibo-lineup-img'),
('Consoles', 'https://cutewallpaper.org/21/video-game-console-wallpaper/Epic-video-game-wallpaper-Retro-video-games,-Games,-Retro-.jpg'); 

INSERT INTO users (username, password, email, created_at) VALUES
('test1', 'test1', 'test1@test.com', NOW()),
('test2', 'test2', 'test2@test.com', NOW()),
('test3', 'test3', 'test3@test.com', NOW());

INSERT INTO userAmiibos (userID, name, series, is_boxed, quantity, image) VALUES
(1, 'Zero Suit Samus', 'Super Smash Bros.', true, 2, 'https://m.media-amazon.com/images/I/718yXWH-TrL._SX342_.jpg'),
(2, 'Mario - Gold Edition', 'Super Mario', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003c0102.png'),
(3, 'Palutena', 'Super Smash Bros.', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_07420000-001f0002.png'),
(1, 'Pit', 'Super Smash Bros.', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_07400000-00100002.png'),
(2, 'Ike', 'Super Smash Bros.', false, 2, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_21010000-00180002.png'),
(3, 'Resetti', 'Animal Crossing', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_018e0000-02490502.png');

-- use advanced image search to choose images that are square (aspect ratio)
-- https://www.google.com/advanced_image_search