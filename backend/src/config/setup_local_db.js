const sqlite3 = require('sqlite3').verbose()

// Create or open the SQLite database
const db = new sqlite3.Database('./data/database.db', (err) => {
  if (err) {
    console.error('Error opening SQLite database:', err.message)
    process.exit(1)
  }
})

// Create a new table called 'users' if it doesn't already exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    );
  `)

  console.log('Table "users" is ready')
})

// Close the database connection
db.close()
