const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

// dotenv for the enviroment variables
dotenv.config()

// Create and listen local server
const app = express()
const port = 8000
app.listen(port, () => console.log(`Server running on port: ${port}`))

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Serve static directory
app.use(express.static('./dist'))

// API endpoint
const apiKeys = {
  geonamesApiUsername: process.env.GEONAMES_API_USERNAME,
  darkskyApiKey: process.env.DARKSKY_API_KEY,
  pixabayApiKey: process.env.PIXABAY_API_KEY
}

app.get('/api-credentials', (req, res) => {
  res.send(apiKeys)
})
