package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
    // Initialize Gin engine
    r := gin.Default()

    // Define a route handler
    r.GET("/hello", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "Hello, World!",
        })
    })

    // Run the server
    r.Run(":8080") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
