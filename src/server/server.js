const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

// dotenv for the enviroment variables
dotenv.config()

// Create and listen server in the local network
const app = express()
const port = 8000
const server = http.createServer(app)
server.listen(port, process.env.BASE_URL, () =>
  console.log(`Server running on port: ${port}`)
)

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Serve static directory
app.use(express.static('./dist'))

// API endpoint
const apiKeys = {
  geonamesApiUsername: process.env.GEONAMES_API_USERNAME,
  darkskyApiKey: process.env.DARKSKY_API_KEY
}

app.get('/api-credentials', (req, res) => {
  res.send(apiKeys)
})
