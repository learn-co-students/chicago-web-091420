# Table Relations in SQL

## Objectives
- discuss persistance and the need for SQL
- differentiate SQLite3 and SQL
- Perform CRUD actions on a table
- Perform CRUD actions across related tables

## Outline
```
10m What is SQL?
50m Practice SQL CRUD
===
60m Total
```

- SQL is a language for querrying databases
- sqlite3 is a relational database

C - Create new records in the form of new rows
    .new - creating a new instance
R - Read, access data from a database
    pet1.name - reading from an instance
U - Update, change data in a database
    pet1.name = "fifi" updating an instance
D - Destroy, delete records from a database
    Pet.all.pop destoying an instance of Pet

### Conventions
    - table names should correspond to model names
        -  `Pet` model -> `pets` table
        - Model is upcase singlular
        - table is lowercase plural
    - foreign keys are named `<foreign_table_name_singular>_id
## Ids
- primary_key - unique identifiers for each row in a table]
- foreign key - pointer or a reference to a row on a different table

## JOINS

- INNER JOIN - show only rows that have a relationship
- LEFT JOIN - show all rows on the left adding columns of the right table when there is a relationship
## Questions
- Return all rows in the artists table
`SELECT name, id FROM artists;`

- Create a new row in the artists table
`INSERT INTO artists (name) VALUES ("new artist name");`

- Create a new table for fans
` CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT);`

- Add a column artist_id to fans
`ALTER TABLE fans ADD COLUMN artist_id INTEGER;`

- Add a row to the fans table
`INSERT INTO fans (name, artist_id) Values ("max", 5);`

- Return fans that are not fans of Alice in Chains
` SELECT * FROM fans WHERE artist_id IS NOT 5;`

- return fans with information about the artist they are fans of
`SELECT * FROM fans INNER JOIN artists ON fans.artist_id = artists.id;`
## Icebox

## Resources