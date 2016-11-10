(function($, window){

	var POKEMONAPP =  (function(){

			function getAllBerriesCallback(response){
				alert("hi");
			}



			function getAllPokemonCallback(response){
				
			}



			function getAllItemsCallback(response){
				
			}


			function getAllLocationsCallback(response){
				
			}


			function getSinglePokemonCallback(response){
				
			}

			function pokemonImage(pokemon){

			}


			function pokemonAbilities(pokemon){

			}


			function addPokemonToPage(pokemonName, pokemonImageUrl, abilities){

			}



		return {
			getAllPokemon: function(){
				getAllBerriesCallback();
			},
			getAllBerries: function(){

			},
			getAllItems: function(){

			},
			getAllLocations: function(){

			}
		}
	})();

})($, window);


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
// - with all public methods so you can call POKEMONAPP.anymethod() and make a propetry allPokemon to hold the array ok pokemon

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

