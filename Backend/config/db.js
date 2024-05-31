const mongoose = require('mongoose')



//CONFIGER .env File
require('dotenv').config();
const DB_URL = process.env.DB_URL

//connect to database
mongoose.connect(DB_URL);

const db = mongoose.connection;

// define event listeners for database connection

db.on('connected', () => {
    console.log("now! its connected to  mongoDB Server");
});


db.on('error', (err) => {
    console.log("connection error",err);
});

db.on('disconnected', () => {
    console.log("disconnected to the Server");
});



// export the db connection 

module.exports = db;