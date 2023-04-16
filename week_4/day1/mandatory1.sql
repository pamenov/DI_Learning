create table items (
	id serial primary key,
	item_name varchar(30),
	price int 
)

INSERT INTO items (item_name, price)
VALUES
	('Small Desk', 100),
	('Large Desk', 300),
	('Fan', 80);

CREATE TABLE customers (
	id serial primary key,
	First_name varchar(10),
	Shem_Mishpaha varchar(20)
)

INSERT INTO customers (First_name, Shem_Mishpaha)
VALUES
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson')

SELECT * FROM items;

SELECT * FROM items WHERE price > 80;

SELECT * FROM items WHERE price <= 300;

SELECT * FROM customers WHERE Shem_Mishpaha = 'Smith';

SELECT * FROM customers WHERE Shem_Mishpaha = 'Jones';

SELECT * FROM customers WHERE First_name != 'Scott';
