
// API CALLBACKS
function showUserFriends(response){
  response.data.forEach(function(friend){
  	addFriendToPage(friend.name, friend.picture.data.url )
  })
  startJTinder();
}

/**
 * jTinder initialization
 */
function startJTinder(){

	$("#tinderslide").jTinder({
		// dislike callback
	    onDislike: function (item) {
		    // set the status text
	        $('#status').html('Dislike image ' + (item.index()+1));
	    },
		// like callback
	    onLike: function (item) {
		    // set the status text
	        $('#status').html('Like image ' + (item.index()+1));
	    },
		animationRevertSpeed: 200,
		animationSpeed: 400,
		threshold: 1,
		likeSelector: '.like',
		dislikeSelector: '.dislike'
	});

	$("#tinderslide").jTinder();

	/**
	 * Set button action to trigger jTinder like & dislike.
	 */
	$('.actions .like, .actions .dislike').click(function(e){
	  e.preventDefault();
	  $("#tinderslide").jTinder($(this).attr('class'));
	});
}


function addFriendToPage(name, imageUrl){
	var $html =  $('<li>' +
              		'<div class="img"></div>' +
             			' <div>'+name+'</div>'+
              		'<div class="like"></div>'+
              		'<div class="dislike"></div>'+
  							'</li>');
	$html.find(".img").css("background-image", 'url(' + imageUrl + ')' );
	$("#tinderslide ul").append($html);
	// $("ul").append($html);
}



// API CALLS
function getUserFriends(){
  FB.api("/me/taggable_friends", function (response) {
    if (response && !response.error) {
      showUserFriends(response);
    }
  });
}

function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  // Logged into your app and Facebook.
  if (response.status === 'connected') {
    getUserFriends();

  // The person is logged into Facebook, but not your app.
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  
  // The person is not logged into Facebook, so we're not sure if
  // they are logged into this app or not.
  } else {

    FB.login(function(response) {
      // var uid = response.authResponse.userID;
      // var accessToken = response.authResponse.accessToken;
      getUserFriends();
    }, {
        scope: 'publish_actions,user_friends,user_photos', 
        return_scopes: true
    });
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function logInUser() {

  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
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
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));