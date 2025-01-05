- To setup database with the sql code:
`sqlite3 db.sqlite < setup.sql`

- To back up database:
`sqlite3 db.sqlite .dump > backup.sql`

- To drop `books` table from database:
`sqlite3 db.sqlite < cleanup.sql`
