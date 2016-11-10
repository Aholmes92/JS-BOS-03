var POKEMONAPI = {

	// 2. Write an API call that gets all the berries and passes them into a callback
	getAllBerries: function(){

	},

	// 3. The call back should loop through the response and console.log every berry name
	getAllBerriesCallback: function(response){
		
	},

	// 4. Write an API call that gets all the pokemon and passes them into a callback
	getAllPokemon: function(){

	},

	// 5. The call back should loop through the response and console.log every pokemon name
	getAllPokemonCallback: function(response){
		
	},

	// 6. Write an API call that gets all the Item and passes them into a callback
	getAllItems: function(){

	},

	// 7. The call back should loop through the response and console.log every item name
	getAllItemsCallback: function(response){
		
	},

	// 8. Write an API call that gets all the Item and passes them into a callback
	getAllLocations: function(){

	},

	// 9. The call back should loop through the response and console.log every Location name
	getAllLocationsCallback: function(response){
		
	},

	// 10. Write an API call that gets a pokemon and passes them into a callback
	getSinglePokemon: function(pokemonName){

	},

	// 11. The call back should loop through the response and console.log the pokemon name
	getSinglePokemonCallback: function(response){
		
	},

	// 12.  Write a that accepts a pokemon Object and returns the front_default sprite url
	pokemonImage: function(pokemon){

	},

	// 13.  Write a that accepts a pokemon Object and returns an array of ability names
	pokemonAbilities: function(pokemon){

	},

	// 14.  Write a that accepts a pokemon image url, pokemon name, and an array of abilities and adds to the page:
	// - an <li> added to #pokemon-list 
	// - an <h1> witht their name 
	// - and <img> tag with their image url
	// - an <ul> and <li> of abilities 
	addPokemonToPage: function(pokemonName, pokemonImageUrl, abilities){

	}

}

// 15.  When the getAllPokemonCallback is called it should now pass each pokemon into the getSinglePokemon function.  The getSinglePokemonCallback function should: 
// - call gpokemonImage function 
// - call pokemonAbilities function
// - call addPokemontoPage function

// 16.  Create a Pokemon object constructor that can accept a Pokemon's name, image url, and an array of abilities

// 17.  Create a global array of allPokemon to store pokemon in

// 18.  The getSinglePokemonCallback should 
// - pass the necessary data to the Pokemon constructor
// - add it to the AllPokemon array
// - pass it to the addPokemonToPage function.

// 19.  Adjust the addPokemonToPage function to accept your Pokemon object instead of the 3 params.


// 20.  Restructure your app as an object POKEMONAPP
// - with all public methods so you can call POKEMONAPP.anymethod: function() and make a propetry allPokemon to hold the array ok pokemon

var POKEMONAPP = {};

// 21.  Change the getAllPokemon method to not make an API call and just return the array of pokemon if the API has already been called.

// 22.  Restructure your app as an object with
// - with only public method 
//	-- getAllPokemon

// 23.  Restructure your app as an object with
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

// 24.  Write a IIFE that accepts the $ object and window as parameters that wraps around your code

// 25.  Make buttons and click events for each of the public methods

