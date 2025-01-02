from http.server import HTTPServer, BaseHTTPRequestHandler

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Set response code to 200 (OK)
        self.send_response(200)
        # Set content type header
        self.send_header('Content-Type', 'text/plain')
        # End headers
        self.end_headers()
        # Write response content
        response = "Welcome to Python Server"
        self.wfile.write(response.encode())

def run_server(port=8000):
    # Create server with handler
    server_address = ('', port)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"Server running on port {port}")
    # Start server
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
