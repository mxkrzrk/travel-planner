const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Configurations server
const app = express();
const port = 8000;
app.listen(port, () => console.log(`Server running on port: ${port}`));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serves static folder
app.use(express.static("./dist"));
