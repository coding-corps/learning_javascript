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

  return db // Return the database connection object
}

// Export the connectDB function for use in other files
module.exports = connectLocalDb
