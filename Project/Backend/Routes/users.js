//Bringing in express
const express = require("express");

//Using express router 
const router = express.Router();

/*router is used to ensure that methods are only invoked if the URL path matches exactly the string passed in
I use arrow functions which take in a response and request object

after router. , i can use POST GET PUT or DELETE depending on the request
*/

router.get("/" , (req , res)=>
{
    //I use the response objects .send() method to send a string
    res.send("Hello")
})

router.get("/sendJSON" , (req , res)=>
{
    res.send({msg:"Hello World"})
})


router.get("/sendJSONBody" , (req , res)=>
{
    res.send({msg:"TrueLayer Is The Best"})
})
//making this file exportble as middleware to be used by express 
module.exports = router;