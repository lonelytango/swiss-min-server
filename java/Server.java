import com.sun.net.httpserver.*;
import java.io.*;
import java.net.InetSocketAddress;

public class Server {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", t -> {
           String request = t.getRequestURI().toString();
           System.out.println("Received request: " + request);

            byte[] response = "Welcome to Java Server".getBytes();
            t.sendResponseHeaders(200, response.length);
            try (OutputStream os = t.getResponseBody()) {
                os.write(response);
            }
            System.out.println("Sent response for: " + request);
        });
        server.start();
        System.out.println("Server started on port 8000");
    }
}
