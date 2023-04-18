-- Get a list of all film languages.
SELECT name FROM
film JOIN language
ON film.language_id = language.language_id
GROUP BY name;

-- Get a list of all films joined with their languages – select the following details : 
-- film title, description, and language name. Try your query with different joins:
SELECT title, description, name FROM
film RIGHT JOIN language
ON film.language_id = language.language_id;

-- Get all films, even if they don’t have languages.
SELECT title, description, name FROM
film JOIN language
ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages.
SELECT name FROM language GROUP BY name;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film (
-- 	id serial PRIMARY KEY,
-- 	name varchar(20)
-- );

-- INSERT INTO new_film (name)
-- VALUES
-- 	('Best movie'),
-- 	('Worst movie'),
-- 	('Kaha-kaha');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review (
-- 	review_id serial NOT NULL PRIMARY KEY,
-- 	film_id int NOT NULL,
-- 	language_id INT NOT NULL,
-- 	title varchar(20),
-- 	score INT,
-- 	review_text text,
-- 	last_update date,
-- 	FOREIGN KEY (film_id) REFERENCES new_film (id),
-- 	FOREIGN KEY (language_id) REFERENCES language (language_id)
-- );

-- ALTER TABLE customer_review ALTER COLUMN last_update TYPE timestamp;
-- ALTER TABLE customer_review ALTER COLUMN last_update SET default CURRENT_TIMESTAMP;
-- ALTER TABLE customer_review
-- DROP CONSTRAINT customer_review_film_id_fkey,
-- ADD CONSTRAINT customer_review_film_id_fkey
--    FOREIGN KEY (film_id)
--    REFERENCES new_film (id)
--    ON DELETE CASCADE;

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
-- 	(
-- 		4,
-- 		1,
-- 		'best movie!!!',
-- 		3,
-- 		'Best movie Ive ever seen!'	
-- 	),
-- 	(
-- 		6,
-- 		1,
-- 		'So-so',
-- 		2,
-- 		'Not the best movie, but not the worst'
-- 	);

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film
WHERE id = 4;