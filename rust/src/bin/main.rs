use std::io::{Write, Result};
use std::net::{TcpListener, TcpStream};

fn main() -> Result<()> {
    let listener = TcpListener::bind("127.0.0.1:8000")?;
    println!("Server listening on port 8000");

    for stream in listener.incoming() {
        match stream {
            Ok(stream) => handle_connection(stream)?,
            Err(e) => eprintln!("Connection failed: {}", e)
        }
    }

    Ok(())
}

fn handle_connection(mut stream: TcpStream) -> Result<()> {
    let response = "\
        HTTP/1.1 200 OK\r\n\
        Content-Length: 22\r\n\
        \r\n\
        Welcome to Rust Server";
    stream.write_all(response.as_bytes())?;
    Ok(())
}
