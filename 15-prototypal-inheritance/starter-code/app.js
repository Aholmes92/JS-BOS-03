
// 1.  Use jquery or DOM to select the farm
var farm = "?";

// start with an empty array of animals
var FarmAnimals = [];

// 2.  Create a FarmAnimal constructor to use as your prototype
//      It should accept a name, species, animalSound, and image
//      It should have the properties .name, .image
//      It should have the method .talk which console.logs "species says: aninaSound"
//      It should have the method .type which console.logs "I am of type - species"
//      It should have the method .action that alerts "I do nothing"
var FarmAnimal = function(name, species, animalSound, image) {

};

// 3.  Create a Cow constructor that calls the Farm animal function and pass in params 
// "cow"
// "moo"
// 'http://cdxdemo.dprm-lab.com/wp-content/uploads/2015/07/dairy_cow.jpg
// and overrides the method .action to alert "Cows like to eat"
function Cow(name) {

};

// 3.  Create a Dog constructor that calls the Farm animal function and pass in params 
// "dog"
// "bark"
// https://pixabay.com/static/uploads/photo/2014/04/05/11/38/dog-316459_960_720.jpg
// and overrides the method .action to alert "Dogs love to run"
function Dog(name) {

};

// 3.  Create a Rooster constructor that calls the Farm animal function and pass in params 
// "rooster"
// "cockadoodledoo"
// https://upload.wikimedia.org/wikipedia/commons/5/52/Brown_Leghorn_rooster_in_Australia.jpg
// and do not override the .action method
function Rooster(name) {

};

// 4.  Build a Cow, Dog and Rooser using the new keyword

// 5.  Build another Cow, Dog and Rooser using Object.create

// 6.  Add the animals to the FarmAnimals array

// 7.  Loop through the FarmAnimals array
FarmAnimals.forEach(function(animal) {

  // add a div with the background image of the animal to the page
  // add a click event on that image that runs the animals talk, type, and action methods

})
