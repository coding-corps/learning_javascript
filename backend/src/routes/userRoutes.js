const express = require('express')
const {
  createUser,
  loginUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

// Public Routes
router.post('/register', createUser) // Register a new user
router.post('/login', loginUser) // Login user

// Protected Routes (require authentication)
router.get('/', authMiddleware, getUsers) // Get all users
router.put('/update', authMiddleware, updateUser) // Update a user
router.delete('/:id', authMiddleware, deleteUser) // Delete a user

module.exports = router
