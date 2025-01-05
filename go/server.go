package main

import (
    "fmt"
    "net/http"
    "log"
)

func handleHome(w http.ResponseWriter, r *http.Request) {
    log.Printf("Request received: %s %s", r.Method, r.URL.Path)
    fmt.Fprintf(w, "Welcome to Go Server")
}

func main() {
    http.HandleFunc("/", handleHome)
	
    log.Printf("Server starting on :8000")
    http.ListenAndServe(":8000", nil)
}
