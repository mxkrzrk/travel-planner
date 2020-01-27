const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')

// Create and listen server in the local network
const app = express()
const port = 8000
const server = http.createServer(app)
server.listen(port, () => console.log(`Server running on port: ${port}`))

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Serve static directory
app.use(express.static('./dist'))
