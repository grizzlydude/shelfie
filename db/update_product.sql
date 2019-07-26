UPDATE shelfie 
SET name = ${name},
price =${price},
image = ${image}
WHERE id = ${id};

SELECT * FROM shelfie;