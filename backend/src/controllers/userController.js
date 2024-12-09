const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const connectLocalDb = require('../config/local_db')
require('dotenv').config()

const db = connectLocalDb()

// Create User
const createUser = async (req, res) => {
  const { name, email, password } = req.body
  console.log('creating user')
  // Hash password before storing it
  const hashedPassword = await bcrypt.hash(password, 10)

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'
  db.run(query, [name, email, hashedPassword], function (err) {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Error creating user', error: err.message })
    }
    res.status(201).json({ id: this.lastID, name, email })
  })
}

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body

  const query = 'SELECT * FROM users WHERE email = ?'
  db.get(query, [email], async (err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h', // Expire token after 1 hour
      },
    )

    res.json({ token })
  })
}

// Get All Users
const getUsers = (req, res) => {
  db.all('SELECT name, email FROM users', (err, rows) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Error fetching users', error: err.message })
    }
    res.json(rows)
  })
}

// Update User
const updateUser = (req, res) => {
  const { id, name, email, password } = req.body

  const hashedPassword = password ? bcrypt.hashSync(password, 10) : undefined

  const query =
    'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?'
  db.run(query, [name, email, hashedPassword, id], function (err) {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Error updating user', error: err.message })
    }
    res.json({ message: 'User updated successfully', id: this.lastID })
  })
}

// Delete User
const deleteUser = (req, res) => {
  const { id } = req.params

  const query = 'DELETE FROM users WHERE id = ?'
  db.run(query, [id], function (err) {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Error deleting user', error: err.message })
    }
    res.json({ message: 'User deleted successfully', id })
  })
}

module.exports = { createUser, loginUser, getUsers, updateUser, deleteUser }
