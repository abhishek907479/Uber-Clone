const dotenv = require('dotenv');
dotenv.config();  // to use environment variables
const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());  // we accept request from all domains only in development purposes


app.get('/' , (req , res) => {
    res.send("hello world")
});

module.exports = app;