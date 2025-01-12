# Server Demostration

## Basic Server
- Run `node server.js`.

## Book Server
- Run `node book_server.js`.
- Use Postman or Thunder Client.

- To get all books on server:
> **GET** localhost:8000/books

---

- To get a book with id 1 on server:
> **GET** localhost:8000/books/1

---

To create a new book in the server:
> **POST** localhost:8000/books
In body JSON, put in:
```
{
  "title": "The Catcher in the Rye",
  "author": "J.D Salinger",
  "pub_year": 1951
}
```

---

For book with id 1, update publish year to 1999:
> **PUT** localhost:8000/books/1
In body JSON, put in:
```
{
  "pub_year": 1999
}
```

---

Delete book with ID 1:
> **DELETE** localhost:8000/books/1

- Note that book model is a temporary array storage. You lose all the books stored when server restarts. We will discuss how to hook it up to the persistent server in part 2.