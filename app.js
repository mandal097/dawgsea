require("dotenv").config();
require('./src/config/conn')

const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require("path");

const baseRouter = require('./src/routes/router');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', async (req, res) => {
    res.send(`<h1>Welcome to SEA DAWG.in <br> You are at API Side</h1>`);
});


app.use('/', baseRouter)

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
})