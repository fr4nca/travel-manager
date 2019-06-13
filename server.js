const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Database
connectDB()

// Middlewares
app.use(express.json({ extended: false }))

app.use('/api/users', require('./routes/users'))
app.use('/api/travels', require('./routes/travels'))
app.use('/api/users', require('./routes/users'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
