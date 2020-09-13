const { response } = require("express");
//Express used to create server
const express = require("express");

//Routes 
const Users =require("./Routes/users");

//Initialise express
const app = express();

//Body Parser MiddleWare
app.use(express.json());

//Create a port Variable
const port = process.env.PORT || 5000 ; 

//Middleware for using the user route
app.use("/Routes" , Users);

//Starting the server on localhost
app.listen(port, ()=>
{
    console.log(`Server started on ${port}`)
   
})

//exporting the server making it testable
module.exports = app