const express = require('express')
const userRoutes = require('./routes/userRoutes')
const bodyParser = require('body-parser')
const connectLocalDb = require('./config/local_db')
const cors = require('cors')

require('dotenv').config()

const app = express()

// Initialize SQLite database connection
const db = connectLocalDb()
app.use(bodyParser.json())

app.use(
  cors({
    origin: 'http://localhost:3000', // Allow frontend React app to make requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  }),
)

app.use('/api/users', userRoutes)

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
