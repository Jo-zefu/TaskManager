require('dotenv').config()
const express = require('express')
const cors =require('cors')
const path = require('path')
const connectDB = require("./config/db");
const app = express()

// Middleware to handle cors
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)

// Connect Database
connectDB().then(() => {

}).catch((err) => console.log(err))

// Middleware
app.use(express.json())


// Routes
// app.use("/api/auth", authRoutes)
// app.use("/api/report", reportRoutes)
// app.use("/api/task", taskRoutes)
// app.use("/api/user", userRoutes)

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`))
