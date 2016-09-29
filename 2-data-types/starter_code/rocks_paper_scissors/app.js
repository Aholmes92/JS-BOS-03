
// user select rocks, paper or scissors
var userSelection = prompt("Do you choose rock, paper or scissors?");

// computer randomly selects rock paper or scissors
var computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "rock";
} else if(computerSelection <= 0.67) {
    computerSelection = "paper";
} else {
    computerSelection = "scissors";
}

// alert user of computer choice
alert("Computer chose " + computerSelection);

// if both selections are the same then alert tie
if (computerSelection === userSelection ) {
	alert("Tie");

// if computer has rock and user has scissors then computer wins
} else if (computerSelection === "rock" && userSelection == "scissors") {
	alert("Computer Wins");

// if computer has paper and user has rock then computer wins
} else if (computerSelection === "paper" && userSelection == "rock") {
	alert("Computer Wins");

// if computer has scissors and user has paper then computer wins
} else if (computerSelection === "scissors" && userSelection == "paper") {
	alert("Computer Wins");
	
// otherwise user wins
} else {
	alert("User Wins");
}