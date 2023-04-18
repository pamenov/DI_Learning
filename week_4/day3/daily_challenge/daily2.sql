-- Create a table called product_orders and a table called items. 
-- You decide which fields should be in each table, 
-- although make sure the items table has a column called price.

-- There should be a one to many relationship between the product_orders table and the items table. 
-- An order can have many items, but an item can belong to only one order.
-- CREATE TABLE product_order (
-- 	order_id SERIAL PRIMARY KEY;
-- )

-- CREATE TABLE products (
-- 	id SERIAL PRIMARY KEY,
--  title VARCHAR(30),
-- 	order_id INT,
-- 	price FLOAT,
-- 	FOREIGN KEY (order_id) REFERENCES product_order (order_id);
-- )

-- Create a function that returns the total price for a given order.
-- CREATE FUNCTION total_cost(current_order INT)
-- RETURNS INT AS $$
-- declare
-- 	total FLOAT;
	
-- 	BEGIN
-- 		total = (SELECT SUM(price) FROM products WHERE products.order_id = current_order);
-- 		return total;
-- 	END
-- $$ LANGUAGE plpgsql;

-- INSERT INTO products (title, order_id, price)
-- VALUES
-- 	('TOMATO', 1, 12),
-- 	('toilet paper', 1, 33),
-- 	('tshirt', 1, 43);

SELECT total_cost(order_id) FROM product_orders;