
//Request is brought in to make http calls
const request = require('supertest')
const app = require("../server")


//Description of the test
describe('Test to that URL is reached' , ()=>
{

    //Async and await are used to remove the need of constant chaining of the promise
    it('Should return a status code of 200' , async done=>
    {
        //server as a variable
        const res = await request(app)
        .get(`/Routes/pokemon/`);
        
        //expecting a status code of 200 to be returned
        expect(res.status).toEqual(200)

        done();
        
    })

 })


 //Description of the test
describe('Test to see that name of pokemon has been retrieved' , ()=>
{

    //Async and await are used to remove the need of constant chaining of the promise
    it('Should return the name of the pokemon' , async done=>
    {
        //server as a variable
        const res = await request(app)
        .get(`/Routes/pokemon/ditto`);
        console.log(res.body)
        
        //expecting the object returned to have a property called name
        expect(res.body).toHaveProperty("name");
        //expecting the value of name to not be null
        expect(res.body.name).toEqual(expect.anything())
        done();
    })

 })




//Description of the test
describe('Test to get the pokemon description' , ()=>
{

    //Async and await are used to remove the need of constant chaining of the promise
    it('Should return the description  of the pokemon' , async done=>
    {
        //server as a variable
        const res = await request(app)
        .get(`/Routes/pokemon/ditto`);
        
         //expecting the object returned to have a property called id
         expect(res.body).toHaveProperty("desc");
         //expecting the value of id to not be null
         expect(res.body.desc).toEqual(expect.anything())
         done();
    })

 })


