import BookModel from '../models/books.js';

class BookController {
    static async getAllBooks(req, res) {
        const books = BookModel.getAll();
        // console.log('GET: Retrieved all books:', books);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: true,
            message: 'Books retrieved successfully',
            data: books
        }));
    }

    static async getBookById(req, res, id) {
        const book = BookModel.getById(id);
        if (book) {
            // console.log('GET: Retrieved book:', book);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: true,
                message: 'Book retrieved successfully',
                data: book
            }));
        } else {
            // console.log('GET: Book not found:', id);
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: false,
                message: 'Book not found',
                data: null
            }));
        }
    }

    static async createBook(req, res, bookData) {
        if (!bookData.title) {
            // console.log('POST: Missing required title field');
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: false,
                message: 'Title is required',
                data: null
            }));
            return;
        }

        const newBook = BookModel.create(bookData);
        // console.log('POST: Created new book:', newBook);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: true,
            message: 'Book created successfully',
            data: newBook
        }));
    }

    static async updateBook(req, res, id, bookData) {
        const updatedBook = BookModel.update(id, bookData);
        if (updatedBook) {
            // console.log('PUT: Updated book:', updatedBook);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: true,
                message: 'Book updated successfully',
                data: updatedBook
            }));
        } else {
            // console.log('PUT: Book not found:', id);
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: false,
                message: 'Book not found',
                data: null
            }));
        }
    }

    static async deleteBook(req, res, id) {
        const deletedBook = BookModel.delete(id);
        if (deletedBook) {
            // console.log('DELETE: Removed book:', deletedBook);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: true,
                message: 'Book deleted successfully',
                data: deletedBook
            }));
        } else {
            // console.log('DELETE: Book not found:', id);
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: false,
                message: 'Book not found',
                data: null
            }));
        }
    }
}

export default BookController;