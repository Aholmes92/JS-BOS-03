

/*

http://pokeapi.co/docsv2

*/

// 1. Write an API call that gets all the berries and passes them into a callback
function getAllBerries(){

}

// 2. The call back should loop through the response and console.log every berry name
function getAllBerriesCallback(response){
	
}

// 3. Write an API call that gets all the pokemon and passes them into a callback
function getAllPokemon(){

}

// 4. The call back should loop through the response and console.log every pokemon name
function getAllPokemonCallback(response){
	
}

// 5. Write an API call that gets all the Item and passes them into a callback
function getAllItems(){

}

// 6. The call back should loop through the response and console.log every item name
function getAllItemsCallback(response){
	
}

// 7. Write an API call that gets all the Item and passes them into a callback
function getAllLocations(){

}

// 8. The call back should loop through the response and console.log every Location name
function getAllLocationsCallback(response){
	
}

// 9. Write an API call that gets a pokemon and passes them into a callback
function getSinglePokemon(pokemonName){

}

// 10. The call back should loop through the response and console.log the pokemon name
function getSinglePokemonCallback(response){
	
}

// 11.  Write a function that accepts a pokemon Object and returns the front_default sprite url
function pokemonImage(pokemon){

}

// 12.  Write a function that accepts a pokemon Object and returns an array of ability names
function pokemonAbilities(pokemon){

}

// 13.  Write a function that accepts a pokemon image url, pokemon name, and an array of abilities and adds to the page:
// - an <li> added to #pokemon-list 
// - an <h1> witht their name 
// - and <img> tag with their image url
// - an <ul> and <li> of abilities 
function addPokemonToPage(pokemonName, pokemonImageUrl, abilities){

}

// 14.  When the getAllPokemonCallback is called it should now pass each pokemon into the getSinglePokemon function.  The getSinglePokemonCallback function should: 
// - call gpokemonImage function 
// - call pokemonAbilities function
// - call addPokemontoPage function

// 15.  Create a Pokemon object constructor that can accept a Pokemon's name, image url, and an array of abilities

// 16.  Create a global array of allPokemon to store pokemon in

// 17.  The getSinglePokemonCallback should 
// - pass the necessary data to the Pokemon constructor
// - add it to the AllPokemon array
// - pass it to the addPokemonToPage function.

// 18.  Adjust the addPokemonToPage function to accept your Pokemon object instead of the 3 params.


// 19.  Restructure your app as an object POKEMONAPP
// - with all public methods 
// -- so you can call POKEMONAPP.anymethod() 
// --  make a property allPokemon to hold the array ok pokemon
// -- so you can call POKEMONAPP.allPokmeon to get a pokemon array

var POKEMONAPP = {};

// 20.  Change the getAllPokemon method to not make an API call and just return the array of pokemon if the API has already been called.

// 21.  Restructure your app as an object with
// - with only public method 
//	-- getAllPokemon

// 22.  Restructure your app as an object with
// - create an IIFE that returns an object
// - public methods
//	-- getAllBerries
//	-- getAllPokemon
// 	-- getAllItems
//	-- getAllLocations
// - and private methods
//	-- getAllBerriesCallback
//  -- getAllPokemonCallback
// 	-- getAllItemsCallback
//  -- getAllLocationsCallback
//  -- getSinglePokemonCallback
//  -- pokemonImage
//  -- pokemonAbilities
//  -- addPokemonToPage

// 23.  Write a IIFE that accepts the $ object and window as parameters that wraps around your code

// 24.  Make buttons and click events for each of the public methods

// 25.  Make form where you can enter a pokemon's name and submit the form to make an API call to show their info

