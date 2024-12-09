const express = require('express')
const connectDB = require('./src/config/connectLocalDb') // Import the database connection function

const app = express()

// Initialize SQLite database connection
const db = connectLocalDb()

// Example route to fetch data from SQLite database
app.get('/data', (req, res) => {
  // Example SQL query to select data from a table named 'users'
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err.message)
      return res.status(500).send('Database query error')
    }
    res.json(rows) // Return the data as JSON
  })
})

// Define your port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
