.headers on
.mode column

-- To create the book table
CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT,
    publication_year INTEGER
);

-- Add data to books table
INSERT INTO books (title, author, publication_year) VALUES 
    ('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    ('To Kill a Mockingbird', 'Harper Lee', 1960);

-- Select all books to display
SELECT * FROM books;

-- Select all books by Fitzgerald to display
SELECT * FROM books WHERE author = 'F. Scott Fitzgerald';

-- Update book under Fitzgerald
UPDATE books 
SET title = 'Winter Dreams',
    publication_year = 1922,
    author = 'F. Scott Fitzgerald'
WHERE id = 1;

-- Drop book table if it exists in database
DROP TABLE IF EXISTS books;
