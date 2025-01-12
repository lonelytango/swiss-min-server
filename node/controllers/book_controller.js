import BookModel from '../models/Book.js';
import { sendJsonResponse } from '../utils/requestUtils.js';

class BookController {
    static async getAllBooks(req, res) {
        const books = BookModel.getAll();
        console.log('GET: Retrieved all books:', books);
        sendJsonResponse(res, 200, true, 'Books retrieved successfully', books);
    }

    static async getBookById(req, res, id) {
        const book = BookModel.getById(id);
        if (book) {
            console.log('GET: Retrieved book:', book);
            sendJsonResponse(res, 200, true, 'Book retrieved successfully', book);
        } else {
            console.log('GET: Book not found:', id);
            sendJsonResponse(res, 404, false, 'Book not found');
        }
    }

    static async createBook(req, res, bookData) {
        if (!bookData.title) {
            console.log('POST: Missing required title field');
            sendJsonResponse(res, 400, false, 'Title is required');
            return;
        }

        const newBook = BookModel.create(bookData);
        console.log('POST: Created new book:', newBook);
        sendJsonResponse(res, 201, true, 'Book created successfully', newBook);
    }

    static async updateBook(req, res, id, bookData) {
        if (!bookData.title) {
            console.log('PUT: Missing required title field');
            sendJsonResponse(res, 400, false, 'Title is required');
            return;
        }

        const updatedBook = BookModel.update(id, bookData);
        if (updatedBook) {
            console.log('PUT: Updated book:', updatedBook);
            sendJsonResponse(res, 200, true, 'Book updated successfully', updatedBook);
        } else {
            console.log('PUT: Book not found:', id);
            sendJsonResponse(res, 404, false, 'Book not found');
        }
    }

    static async deleteBook(req, res, id) {
        const deletedBook = BookModel.delete(id);
        if (deletedBook) {
            console.log('DELETE: Removed book:', deletedBook);
            sendJsonResponse(res, 200, true, 'Book deleted successfully', deletedBook);
        } else {
            console.log('DELETE: Book not found:', id);
            sendJsonResponse(res, 404, false, 'Book not found');
        }
    }
}

export default BookController;