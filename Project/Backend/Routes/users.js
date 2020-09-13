//Bringing in express
const express = require("express");
//Using express router 
const router = express.Router();

router.get("/" , (req , res)=>
{
    res.send("Hello")
})

//making this file exportble as middleware to be used by express 
module.exports = router;