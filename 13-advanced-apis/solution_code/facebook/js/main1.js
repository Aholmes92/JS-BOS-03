
// API CALLBACKS
function showUserFriends(response){
  response.data.forEach(function(friend){
    addFriendToPage(friend.name, friend.picture.data.url )
  })

}



function addFriendToPage(name, imageUrl){
  var $html =  $('<li>' +
                  '<div class="img"></div>' +
                  ' <div>'+name+'</div>'+
                  '<div class="like"></div>'+
                  '<div class="dislike"></div>'+
                '</li>');
  $html.find(".img").css("background-image", 'url(' + imageUrl + ')' );
  $("ul").append($html);
}



// API CALLS
function getUserFriends(){
  FB.api("/me/taggable_friends", function (response) {
    if (response && !response.error) {
      showUserFriends(response);
    }
  });
}


// This function is called when someone finishes with the Login
// Button. 
function logInUser() {
  FB.login(function(response) {
    // var uid = response.authResponse.userID;
    // var accessToken = response.authResponse.accessToken;
    getUserFriends();
  }, {
      scope: 'publish_actions,user_friends,user_photos', 
      return_scopes: true
  });
}


// Start App
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1395272264081262',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
