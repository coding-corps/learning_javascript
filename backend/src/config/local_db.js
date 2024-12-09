const sqlite3 = require('sqlite3').verbose() // Import the sqlite3 library

// Function to connect to SQLite database
const connectLocalDb = () => {
  // Open or create a database file (your database file will be stored in 'data/database.db')
  const db = new sqlite3.Database('./data/database.db', (err) => {
    if (err) {
      console.error('Error connecting to SQLite database:', err.message)
      process.exit(1) // Exit if connection fails
    } else {
      console.log('Connected to the SQLite database')
    }
  })
  // Create the 'users' table with password and timestamps if it doesn't exist
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `)

    console.log('Table "users" is ready')
  })

  return db // Return the database connection object
}

// Export the connectDB function for use in other files
module.exports = connectLocalDb
