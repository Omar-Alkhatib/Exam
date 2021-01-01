/*

PART 2 [SQL Queries]:

Type the correct SQL query below every question:

Q1) What is the query for displaying all the databases?

SELECT * ;

Q2) What is the query for using a specific database?

use database_name;


Q3) What is the query for creating a new database called `meraki`?

create database meraki;
Q4) What is the query for deleting a database called `meraki`?

delete database meraki;
Q5) What is the query for displaying all the tables for a database called `meraki`?

SELECT * from meraki;

Q6) What is the query for displaying the columns of a table called `users`?

SELECT * FROM users;
Q7) What is the query to insert information into a table called `users` that has four columns (name, email, password, age)?

APEND users name, email, password, age;

Q8) What is the query to update the `name` of a user that has `info@meraki-academy.org` as an email?

UPDATE name from <table_name> WHERE email = 'info@meraki-academy.org';

Q9) What is the query to delete a user that has `info@meraki-academy.org` as an email?

DELETE user FROM <table_name> WHERE email  = `info@meraki-academy.org`;

Q10) What is the query to perform a left join on two tables (users, posts) depending on the user_id? (user_id is a FK in `posts` table)

SELECT * FROM users,  post JOIN_lEFT WHERE users.id = posts.user_id;

Q11) What is the query to get all the users that their age ranges from 20-30 from the `users` table?

SELECT * FROM users WHERE age BETWEEN 20 - 30;
*/
