# What is SQL?
SQL stands for Structured Query Language.
SQL allows us to:
- store and persist information
- manipulate that information

SQLite 3 is a relational database. In a relational database, data (information) is stored in rows on tables. You can imagine Excel spreadsheets.

CRUD is an acronym describing the types of actions we can take on a relational database:
- Create data
- Read data
- Update data
- Delete data

# Where can we write SQL?
- console -> sqlite3 
- 
# Practice SQL Crud

1. Write the SQL to return all of the rows in the artists tables

`SELECT * FROM artists`

2. Write the SQL to select the artist with the name "Black Sabbath"

`SELECT * FROM artists WHERE name = 'Black Sabbath' > SELECT * FROM artists WHERE LIKE = 'Black Sabbath'`

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

`CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT)`

4. Write the SQL to alter the fans table to have an artist_id column of type integer

`ALTER TABLE fans ADD COLUMN artist_id INTEGER`

5. Write the SQL to add yourself as a fan of the Black Eyed Peas (artist_id = 169) 

`INSERT INTO fans (name, artist_id) VALUES ("Your name", 169)`

Don't add an ID manually, but show that you can do it

6. Return fans that are not fans of the Black Eyed Peas (artist_id = 169) 

`SELECT * FROM fans WHERE artist_id IS NOT 169`

5. Return artists name next to their album title

`SELECT * FROM fans INNER JOIN artists ON fans.artist_id = artists.id;`