const express = require('express');
const app = express();

const db = require('./config/db.js')

const NsCapexRoute = require('./Routes/NsCapex.route.js')


//CONFIGER .env File
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//inislize bordy parser
// its convert data into object and then store in to req.body
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function(req, res){
res.send('hello world');  
});

app.use('/', NsCapexRoute);


app.listen(PORT, function(){
console.log('now its running', PORT);
});