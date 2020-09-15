// //Bringing in express
 const express = require("express");

// //Using express router 
 const router = express.Router();

 const request = require("request")

// //request used to make http calls from node
// const request = require("request")

// //This method is just used to let us know that this page and it's methods can be reached
router.get("/pokemon" , (req, res)=>
{
    res.send("hello")
})

// //This method gets the pokemon name and ID
router.get("/pokemon/:name" , (req, res)=>
{
    //takes name passed into URL and converts to lowercase 
    const name = req.params.name.toLowerCase()

    //pokemon object created
    var pokemon = {
        name:"",
        desc:""
    }
    //request is made to pokemon API passing in the name taken from the URL
    request(`https://pokeapi.co/api/v2/pokemon/${name}`,(error , response) =>
    {
        //if there is no error
        if(!error && response.statusCode==200)
        {
            //This is the response of the request
            const responseBody = response.body
            //The body of the request is then converted to a JSON array due to it's length
            const responseJSON = JSON.parse(responseBody)
            //The name of the pokemon is taken from this JSON array
            const pokemonName = responseJSON.name

            //Pokemon name obtained and set
            pokemon.name = pokemonName
           
            //request to get te pokemon description
            request(`https://pokeapi.co/api/v2/pokemon-species/${name}` , (error , response)=>
            {

            //This is the response of the request
            const responseBody = response.body
            //The body of the request is then converted to a JSON array due to it's length
            const responseJSON = JSON.parse(responseBody)

            //Obtain the array of descriptions
            const descriptions = responseJSON.flavor_text_entries

            //I filter the array to only include english entries
            const englishDescriptions = descriptions.filter((pokemon)=>
            {
                if(pokemon.language.name ==="en")
                {
                    return pokemon
                }
            })

            //Here i get the total number of descriptions in the database/API
            const descriptionsLength = englishDescriptions.length


            //I then create a variable to select a random description
            const random = Math.floor(Math.random() * Math.floor(descriptionsLength))

            //I remove any line breaks or spaces
            const finalText = englishDescriptions[random].flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " ").trim();
               
            //I discovered that the shaksprean API could not convert words containing ' & ’ or letters with dialects on them so i replaced these using .replace
            const normal = finalText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "");

             //I then set the pokemon obejcts description to be that of the random object selected from the array
            pokemon.desc = normal
               
             //Request to translate pokemon description
             request(`https://api.funtranslations.com/translate/shakespeare.json?text=${pokemon.desc}&&api_key=dbCcJ5Jk_GUN5ieftZVpTQeF`, (error , response)=>
             {
                 
                     //convert the body repsonse to a json object due to it's length
                     translation = JSON.parse(response.body)
                     //set the pokemon description
                     pokemon.desc = translation.contents.translated
                     //repsonse is then sent back to client
                     res.send(pokemon)
                 
             })
         
            })
        }
    })
    

})



// //making this file exportble as middleware to be used by express 
 module.exports = router;