const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded // Attach the user info to the request object
    next() // Proceed to the next middleware/route handler
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}

module.exports = authMiddleware
