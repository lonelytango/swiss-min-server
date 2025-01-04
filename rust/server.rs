use std::io::{Write, Result};
use std::net::TcpListener;

fn main() -> Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8000")?;
    println!("Server running on http://127.0.0.1:8000");

    let body = "Welcome to Rust Server";
    let response = format!(
        "HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n{}",
        body.len(),
        body
    );
    
    for stream in listener.incoming() {
        match stream {
            Ok(mut stream) => {
                stream.write_all(response.as_bytes())?;
                stream.flush()?;
            },
            Err(e) => eprintln!("Connection failed: {}", e)
        }
    }
    
    Ok(())
}
