//Bringing in express
const express = require("express");

//Using express router 
const router = express.Router();

router.get("/" , (req , res)=>
{
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