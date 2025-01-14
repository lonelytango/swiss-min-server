import { createServer } from 'http';
import BookController from './controllers/book_controller.js';
import { getRequestBody } from './utils/request_utils.js';

const server = createServer(async (req, res) => {

	// Parse the URL to get the path and potential ID
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    const parts = path.split('/');

    // Handle default path
    if (path === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Book Server!');
        return;
    }

    if (path.startsWith('/books')) {
        const id = parseInt(parts[2]); // Assuming URLs like /books/1

        switch (req.method) {
            case 'GET':
                if (id) {
                    await BookController.getBookById(req, res, id);
                } else {
                    await BookController.getAllBooks(req, res);
                }
                break;

            case 'POST':
                const newBookData = await getRequestBody(req);
                await BookController.createBook(req, res, newBookData);
                break;

            case 'PUT':
                if (!id) {
                    res.writeHead(400);
                    res.end('Book ID is required');
                    break;
                }
                const updateData = await getRequestBody(req);
                await BookController.updateBook(req, res, id, updateData);
                break;

            case 'DELETE':
                if (!id) {
                    res.writeHead(400);
                    res.end('Book ID is required');
                    break;
                }
                await BookController.deleteBook(req, res, id);
                break;

            default:
                res.writeHead(405);
                res.end('Method not allowed');
        }
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(8000, () => {
	console.log('Server running on port 8000');
});
