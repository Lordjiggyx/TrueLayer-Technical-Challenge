const { response } = require("express");
//Express used to create server
const express = require("express");

//Routes 
const Users =require("./Routes/users");
const poke = require("./Routes/pokemon")

//Initialise express
const app = express();

//Body Parser MiddleWare
app.use(express.json());


//Middleware for using the user route
app.use("/Routes" , Users);
app.use("/Routes" , poke)


//exporting the server making it testable
module.exports = app;