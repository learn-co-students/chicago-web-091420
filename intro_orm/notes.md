# Intro to ORMs

## Objective
- Define Object Relational Mapper (ORM)
- Distinguish between ORMs and SQL
- Demonstrate that an ORM connects a scripting language to a database
- Define persistant CRUD actions on a model
- Discuss HEREDOCs

## Outline
```
5m review one to many relationships in SQL
10m many to many in SQL
10m review CRUD in SQL
35m Persistance in a twitter app
```

## Questions
- how do I rename a file?
`mv <path-to-file> <path-to-new-file>`
- boolean data type in sqlite3
`CREATE TABLE pets (id PRIMARY KEY, favorite INTEGER)

## One to Many
- primary_key - unique identifier for every row
- foreign_key - pointer or a reference to a row on another table

## Conventions
- join tables are snake cased and plural of the two joining classes
    - cats and owners -> cats_owners

## CRUD review
- create a record of cat
`INSERT INTO cats (name, age) VALUES ('maru', 4);`
- read records from the cat table
`SELECT name FROM cats WHERE age > 4;`
- update a cat record
`UPDATE cats SET name = 'samson' WHERE id = 2;`
- destroy a cat record
`DELETE FROM cats WHERE id = 3;`

# ICEBOX
- do the execute method attribute arguments need to be in order