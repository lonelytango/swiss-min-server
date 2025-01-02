use std::net::TcpListener;
use std::io::Write;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:8000").unwrap();
    println!("Server started on port 8000");

    for stream in listener.incoming() {
        if let Ok(mut stream) = stream {
            println!("Received request");
            let response = "HTTP/1.1 200 OK\r\nContent-Length: 20\r\n\r\nWelcome to Rust Server";
            stream.write_all(response.as_bytes()).unwrap();
            println!("Sent response");
        }
    }
}
