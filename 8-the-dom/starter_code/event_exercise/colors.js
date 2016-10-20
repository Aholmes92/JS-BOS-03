// add an event listener that prompts for user information when button is clicked
// addEventListener
// onclick
// removeEventListener

var Color = {
  the_div: document.getElementById('box'),
  green_button: document.getElementById('green'),
  blue_button: document.getElementById('blue'),
  red_button: document.getElementById('red'),

  buttonEvent: function(){
    Color.green_button.onclick = Color.changeGreen;
    Color.blue_button.onclick = Color.changeBlue;
    Color.red_button.onclick = Color.changeRed
    },

  changeRed: function(){
    Color.the_div.className = "red";
  },

  changeGreen: function(){
    Color.the_div.className = "green";
  },
  changeBlue: function(){
    Color.the_div.className = "blue";
  },

};


Color.buttonEvent();
