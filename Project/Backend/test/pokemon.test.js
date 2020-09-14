//This creates a refernece to the user.js file to test it's methods
const {poke} = require("../Routes/pokemon")
//Request is brought in to make http calls
const request = require('supertest')
const app = require("../server")
const { response } = require("express")


//Description of the test
describe('Test to that URL is reached' , ()=>
{

    //Async and await are used to remove the need of constant chaining of the promise
    test('Should return a status code of 200' , async()=>
    {
        //server as a variable
        const res = await request(app)
        .get(`/Routes/pokemon/`);
        
        //expecting a status code of 200 to be returned
        expect(res.status).toEqual(200)

        
    })

 })


 //Description of the test
describe('Test to see that name of pokemon has been retrieved' , ()=>
{

    //Async and await are used to remove the need of constant chaining of the promise
    test('Should return the name of the pokemon' , async()=>
    {
        //server as a variable
        const res = await request(app)
        .get(`/Routes/pokemon/:name`);
        
        //expecting the object returned to have a property called name
        expect(res.body).toHaveProperty("name");
        //expecting the value of name to not be null
        expect(res.body.name).toEqual(expect.anything())

    })

 })


  //Description of the test
describe('Test to get the pokemon ID' , ()=>
{

    //Async and await are used to remove the need of constant chaining of the promise
    test('Should return the ID of the pokemon' , async()=>
    {
        //server as a variable
        const res = await request(app)
        .get(`/Routes/pokemon/:name`);
        
        //expecting the object returned to have a property called id
        expect(res.body).toHaveProperty("id");
        //expecting the value of id to not be null
        expect(res.body.id).toEqual(expect.anything())

    })

 })


//Description of the test
describe('Test to get the pokemon description' , ()=>
{

    //Async and await are used to remove the need of constant chaining of the promise
    test('Should return the description  of the pokemon' , async()=>
    {
        //server as a variable
        const res = await request(app)
        .get(`/Routes/pokemon/:name`);
        
         //expecting the object returned to have a property called id
         expect(res.body).toHaveProperty("desc");
         //expecting the value of id to not be null
         expect(res.body.desc).toEqual(expect.anything())
    })

 })


