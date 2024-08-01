package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type Task struct {
    ID     int    `json:"id"`
    Title  string `json:"title"`
    Status string `json:"status"`
}

var db *sql.DB

func setupDB() error {
    var err error
    db, err = sql.Open("sqlite3", "./tasks.db")
    if err != nil {
        return err
    }

    // Create tasks table if not exists
    query := `
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            status TEXT
        );
    `
    _, err = db.Exec(query)
    return err
}
