const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpack = require('webpack')

// Configuration server
const app = express()
const port = 8000
app.listen(port, () => console.log(`Server running on port: ${port}`))

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Development and production mode
if (webpack.mode === 'production') {
  // Serve static folder
  app.use(express.static('./dist'))
} else {
  app.get('/', (req, res) => res.send('Development Mode'))
}
