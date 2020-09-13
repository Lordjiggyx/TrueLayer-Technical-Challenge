//This creates a refernece to the user.js file to test it's methods
const {user} = require("../Routes/users")
//Request is brought in to make http calls
const request = require('supertest')


describe('Test to see that correct URL is being reached' , ()=>
{
    test('Should return a status code of 200' ,  ()=>
    {
        return request(user)
        .get("/")
        .expect(200)

        
    })


})