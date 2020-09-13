//This creates a refernece to the user.js file to test it's methods
const {user} = require("../Routes/users")
//Request is brought in to make http calls
const request = require('supertest')
const app = require("../server")

//Test to see that URL is being reached

//Description of test 
describe('Test to see that correct URL is being reached' , ()=>
{
    //The actual test itslef 
    test('Should return a status code of 200' ,  ()=>
    {
        //returns the application this is the supertest wy of tetsing express endpoints but it only allows status codes to be tested
        return request(app)
        //get the root url
        .get("/Routes")
        //assert that the status code should be 200
        .expect(200)

        
    })


})

//Test to see that json key is recieved

//Description of the test
describe('Test to see that body contains key sent' , ()=>
{
    //The actual test

    /*I changed the way i test these methods by using async/await this allowed me to create a varible that is actully the server
    this let test the methods more accurately rather then just knowing the stauts code i can now check the contents of the repsonse of the 
    HTTP request
    */

    //Async and await are used to remove the need of constant chaining of the promis
    test('Should contain a json object with the key msg' , async()=>
    {
        //server as a variable
        const res = await request(app)
        //get the URL that sends a json object
        .get("/Routes/sendJSON")
        
        //Testing to see if the json object has a key called msg
        expect(res.body).toHaveProperty("msg")

        
    })

 })


 //// THE SAME PROCESS IS FOLLOWED FOR THE REMAIMING TESTS ANY CHANGES WILL BE NOTED/////

 ////Test to see that json object key has a pair value which is a message about true layer
describe('Test to see that body contains msg key/pair value sent' , ()=>
{
    test('Should contain a json object with a message about truelayer' , async()=>
    {
        const res = await request(app)
        .get("/Routes/sendJSONBody")
        
        
        expect(res.body.msg).toEqual("TrueLayer Is The Best")

        
    })

 })

