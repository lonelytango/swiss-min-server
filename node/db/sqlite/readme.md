- To setup database
`sqlite3 db.sqlite < setup.sql`

- To show `books` table in database
`sqlite3 db.sqlite < show_table.sql`

- To update the row in database
`sqlite3 db.sqlite < update.sql`

- To back up database
`sqlite3 db.sqlite .dump > backup.sql`

- To drop `books` table from database
`sqlite3 db.sqlite < drop_table.sql`

- To back up database
`sqlite3 db.sqlite .dump > backup.sql`

- To restore the database, simply apply the backup.sql to the .sqlite db file
`sqlite3 db.sqlite < backup.sql`
