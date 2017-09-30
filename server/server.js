const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const port = 3000;
const users = require('./api/users');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//cors
app.use(cors())

// api
app.use("/api",users);

app.listen(port, function(){
    console.log("serven listen to port ", port);
})