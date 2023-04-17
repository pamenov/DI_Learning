SELECT * FROM items ORDER BY price;

SELECT * FROM items WHERE price >= 80 ORDER BY -price;

SELECT first_name, shem_mishpaha FROM customers ORDER BY first_name LIMIT 3;

SELECT shem_mishpaha FROM customers ORDER BY shem_mishpaha DESC;