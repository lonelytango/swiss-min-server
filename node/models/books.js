// Book database simulation
let books = [];
let nextId = 1;

class BookModel {
    static getAll() {
        return books;
    }

    static getById(id) {
        return books.find(book => book.id === id);
    }

    static create(bookData) {
        const newBook = {
            id: nextId++,
            title: bookData.title,
            author: bookData.author || null,
            pub_year: bookData.pub_year || null
        };
        books.push(newBook);
        return newBook;
    }

    static update(id, bookData) {
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            const existingBook = books[index];
            books[index] = {
                ...existingBook,
                ...bookData,
                id: id
            };
            return books[index];
        }
        return null;
    }

    static delete(id) {
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            return books.splice(index, 1)[0];
        }
        return null;
    }
}

export default BookModel;
