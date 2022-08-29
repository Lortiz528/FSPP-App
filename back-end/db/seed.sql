\c home_inventory; 

INSERT INTO amiibos (name, series, is_boxed, quantity, image) VALUES
('Zero Suit Samus', 'Super Smash Bros.', true, 2, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_05c00100-001d0002.png'),
('Mario - Gold Edition', 'Super Mario', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003c0102.png'),
('Palutena', 'Super Smash Bros.', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_07420000-001f0002.png'),
('Pit', 'Super Smash Bros.', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_07400000-00100002.png'),
('Ike', 'Super Smash Bros.', false, 2, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_21010000-00180002.png'),
('Resetti', 'Animal Crossing', true, 1, 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_018e0000-02490502.png');

INSERT INTO collections (name, image) VALUES ('Amiibos', 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/amiibo/amiibo-lineup-img'),
('Consoles', 'https://wallpaperaccess.com/full/2520803.jpg'); 

INSERT INTO consoles (name, brand, quantity, color, has_box, is_sealed, image) VALUES
('Switch', 'Nintendo', 1, 'black', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg'),
('Switch Lite', 'Nintendo', 1, 'Yellow', true, false, 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_600/ncom/en_US/products/hardware/nintendo-switch-lite-yellow/110678-nintendo-switch-lite-yellow-front-screen-on-1200x675'),
('Switch Lite', 'Nintendo', 1, 'Gray', true, false, 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_600/ncom/en_US/products/hardware/nintendo-switch-lite-gray/110672-nintendo-switch-lite-gray-front-1200x675'),
('Switch Lite Dialga & Palkia Edition', 'Nintendo', 1, 'black', true, true, 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_600/ncom/en_US/products/hardware/nintendo-switch0lite-dialga-and-palkia-edition/switch-lite-dialga-header'),
('Wii ', 'Nintendo', 1, 'white', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wii-console.jpg/430px-Wii-console.jpg'),
('Wii U', 'Nintendo', 1, 'black', true, false, 'https://i.ebayimg.com/images/g/x9kAAOSwHtVfFoxY/s-l640.jpg'),
('NES', 'Nintendo', 1, 'Gray', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NES-Console-Set.jpg/430px-NES-Console-Set.jpg'),
('SNES', 'Nintendo', 1, 'Gray', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/430px-SNES-Mod1-Console-Set.jpg'),
('N64', 'Nintendo', 1, 'Purple', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/N64-Console-Set.jpg/430px-N64-Console-Set.jpg'),
('Gamecube', 'Nintendo', 1, 'purple', false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/GameCube-Set.jpg/430px-GameCube-Set.jpg'),
('Gameboy color', 'Nintendo', 2, 'Atomic Purple', true, true, 'https://m.media-amazon.com/images/I/51TIgev9CUL.jpg'),
('Gameboy color', 'Nintendo', 1, 'Kiwi', true, true, 'https://m.media-amazon.com/images/I/61vi4-7L0qL._SX522_.jpg'),
('Gameboy advance', 'Nintendo', 1, 'purple', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nintendo-Game-Boy-Advance-Purple-FL.jpg/430px-Nintendo-Game-Boy-Advance-Purple-FL.jpg'),
('Gameboy advance', 'Nintendo', 1, 'white', false, false, 'https://m.media-amazon.com/images/I/416cHsQagFL.jpg'),
('Gameboy 3DS XL', 'Nintendo', 1, 'black', true, false, 'https://m.media-amazon.com/images/I/412hV89h3uL.jpg'),
('Gameboy 2DS XL Poke Ball Edition', 'Nintendo', 1, 'red', true, true, 'https://m.media-amazon.com/images/I/61O3qyz9vNL._SX522_.jpg'),
('Gameboy SP', 'Nintendo', 21, 'Graphite', true, false, 'https://m.media-amazon.com/images/I/41C297PQC7L.jpg'),
('Playstation 1', 'Sony', 1, 'black', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/PlayStation-SCPH-1000-with-Controller.jpg/440px-PlayStation-SCPH-1000-with-Controller.jpg'),
('Playstation 2', 'Sony', 1, 'black', true, false, 'https://m.media-amazon.com/images/I/61pETE6v4vL._SX522_.jpg'),
('Playstation 3', 'Sony', 1, 'black', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Sony-PlayStation-3-CECHA01-wController-L.jpg/500px-Sony-PlayStation-3-CECHA01-wController-L.jpg'),
('Playstation 4', 'Sony', 1, 'black', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/PS4-Console-wDS4.jpg/440px-PS4-Console-wDS4.jpg'),
('Playstation Vita', 'Sony', 1, 'black', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PlayStation-Vita-1101-FL.jpg/484px-PlayStation-Vita-1101-FL.jpg'),
('Playstation Portable', 'Sony', 2, 'black', true, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Psp-1000.jpg/390px-Psp-1000.jpg');

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