// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = 1234;

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://damianadmin:abcd1234@ds139884.mlab.com:39884/wallofshame';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const quote = require('./routes/quote.route');
app.use('/quotes', quote);
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});