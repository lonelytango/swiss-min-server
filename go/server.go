package main

import (
    "fmt"
    "net/http"
    "log"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        log.Printf("Request received: %s %s", r.Method, r.URL.Path)
        fmt.Fprintf(w, "Welcome to Go Server")
    })
	
    log.Printf("Server starting on :8000")
    http.ListenAndServe(":8000", nil)
}
