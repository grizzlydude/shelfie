-- Creating the table 
CREATE TABLE shelfie (
	id SERIAL PRIMARY KEY,
  shelf_name VARCHAR(100),
  price NUMERIC,
  image VARCHAR(200)
);

-- dummy data
INSERT INTO shelfie (shelf_name, price, image)
VALUES ('shoes', 15.23, 'https://s7d9.scene7.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg'),
('pants', 5.99, 'http://cdn.shopify.com/s/files/1/0266/4899/products/PassagePant_Moss_Flat_550x.jpg?v=1562884875'),
('wallet', 500, 'https://thumbs.dreamstime.com/z/cute-smiling-happy-money-wallet-vector-cute-smiling-happy-money-wallet-vector-modern-line-outline-flat-style-cartoon-character-99645938.jpg');
