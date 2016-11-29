/************************* APP LOCAL SCOPE *************************/
// IIFE that accepts jQuery and window objects for my local scope
(function($, window){


  /************************* ON PAGE LOAD *************************/
  // Once window has completed loading then run
  $(function() {

    /************************* BUILD OBJECT *************************/
    // Create my app object
    var MyApp = {};

    // Add an array of starting to-dos 
    // Note: this starter data could be loaded from somewhere else like an API
    MyApp.todos = [{toDo: "Clean fridge"}, {toDo: "Take out Puppy"}, {toDo: "Finish work"} ];

    // Compile element using handlebars
    MyApp.compileItem = function(item) {
    }

    // Add to the array and DOM
    MyApp.addToList = function(item) {
    }

    // Remove from the array and DOM
    MyApp.removeFromList = function(item) {
    }

    // Add list to the DOM
    MyApp.populateList = function() {
    }

    /************************* ADD EVENT HANDLERS *************************/

    // Add item to list when submitted
    MyApp.submitEvent = function(){
    }

    // Cross out item when complete is clicked
    MyApp.completeEvent = function(){
    }

    // Hover events for each list item. 
    // On hovering an element, its siblings get an inactive class applied
    MyApp.hoverEvent = function(){
    }

    // Delete item from array and DOM
    MyApp.deleteEvent = function(){
    }

    // Initiate APP
    MyApp.init = function(){

      // Create initial list of items
      this.populateList();
      // Set submit event
      this.submitEvent();
      // Set complete event
      this.completeEvent();
      // Set hover event
      this.hoverEvent();
      // Set delete event
      this.deleteEvent();
    }

    /************************* RUN APP *************************/
    MyApp.init();

  });

}($, window);