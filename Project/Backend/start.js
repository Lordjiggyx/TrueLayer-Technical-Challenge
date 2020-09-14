const app = require("./server")

//Create a port Variable
const port = process.env.PORT || 5000 ; 

//Starting the server on localhost
app.listen(port, ()=>
{
    console.log(`Server started on ${port}`)
   
})