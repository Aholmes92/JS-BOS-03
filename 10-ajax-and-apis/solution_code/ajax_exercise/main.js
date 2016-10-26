/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/
window.onload = function(){
	var httpRequest;
	// access getDataButton from DOM
	var getDataButton = document.getElementById("getDataButton");

	// set click event for the get Data Button
  getDataButton.onclick = function() {
    console.log('making request');
    makeRequest('http://data.consumerfinance.gov/api/views.json');
  };

  // make ajax request
  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  // define method for ajax response
  function responseMethod() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
      } else {
        console.log('Error: there was a problem with the request.');
      }
    }
  }
}
