import { createServer } from 'http';

const server = createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Welcome to Node Server');
});

server.listen(8000, () => {
	console.log('Server running on port 8000');
});
