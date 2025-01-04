use std::io::{Write, Result};
use std::net::TcpListener;

fn main() -> Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8000")?;
    
    for stream in listener.incoming() {
        match stream {
            Ok(mut stream) => stream.write_all(b"HTTP/1.1 200 OK\r\n\r\nWelcome to Rust Server")?,
            Err(e) => eprintln!("Connection failed: {}", e)
        }
    }
    
    Ok(())
}
