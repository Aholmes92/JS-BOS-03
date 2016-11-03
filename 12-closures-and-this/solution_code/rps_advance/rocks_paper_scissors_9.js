(function(){



	var MYGAME = {

		// scores
		userScore: 0,
		computerScore: 0,
		playTo: 1,
		// starts program
		runProgram: function(){
			MYGAME.playTo = prompt("How many games needed to win?");
			// MYGAME.playTournament.call(MYGAME, MYGAME.playTo);
			MYGAME.playTournament(MYGAME.playTo);
		},
		// validates users choice
		validUserChoice: function(choice){
			return this.isRock(choice) || this.isScissor(choice) || this.isPaper(choice);
		},
		// check if valid rock choice
		isRock: function(input){
			switch(input) {
			  case "rock":
	    	case "rocks":
	    	case "Rock":
	    	case "Rocks":
	        return true
	        break;
	    	default:
	        return false;
	    }	
		},
		// check if valid scissor input
		isScissor: function(input){
			switch(input) {
			  case "scissor":
	    	case "scissors":
	    	case "Scissor":
	    	case "Scissors":
	        return true
	        break;
	    	default:
	        return false;
	    }	
		},
		// check if valid paper input
		isPaper: function(input){
			switch(input) {
			  case "paper":
	    	case "papers":
	    	case "Paper":
	    	case "Papers":
	        return true
	        break;
	    	default:
	        return false;
	    }	
		},
		// check if valid rock choice
		// user select rocks, paper or scissors
		getUserChoice: function(){
			var userSelection = prompt("Do you choose rock, paper or scissors?");
			return userSelection;
		},
		// computer randomly selects rock paper or scissors
		getComputerChoice: function(){
			var computerSelection = Math.random();
			if (computerSelection < 0.34) {
			    computerSelection = "rock";
			} else if(computerSelection <= 0.67) {
			    computerSelection = "paper";
			} else {
			    computerSelection = "scissors";
			}
			return computerSelection;

			// COULD USE MAPPING a strategy for handling logic
			// var stringMapping = ["rock", "scissors", "paper"];
			// return stringMapping[ Math.floor(Math.random() * 3) ];
		},
		// returns winner
		getWinner: function(computerSelection, userSelection){
			if (computerSelection === userSelection ) {
				return "Tie";
			} else if (computerSelection === "rock" && userSelection === "scissors") {
				return "Computer";
			} else if (computerSelection === "paper" && userSelection === "rock") {
				return "Computer";
			} else if (computerSelection === "scissors" && userSelection === "paper") {
				return "Computer";
			}else {
				return "User";
			}

			// // COULD USE MAPPING a strategy for handling logic
			// var winningMap = {rock: "scissors", paper: "rock", scissors: "paper"}; 
		 //  if (playerChoice === computerChoice){
		 //    return "Tie";
		 //  } else if(computerChoice === winningMap[playerChoice]){
		 //    return "User";
		 //  } else {
		 //  	return "Computer";
			// }
		},
		// plays game once
		playGame: function(){
			var userChoice, computerChoice, winner;

			userChoice = this.getUserChoice();
			while (!this.validUserChoice(userChoice)){
				userChoice = this.getUserChoice();
			}

			computerChoice = this.getComputerChoice();
			alert("Computer chose " + computerChoice + ", you chose " + userChoice + ".")

			winner = this.getWinner(computerChoice, userChoice);

			if (winner === "Computer") {
				this.computerScore++;
				alert("Computer wins round, Score: Computer-"+this.computerScore+" User-"+this.userScore);
			} else if (winner === "User"){
				this.userScore++;
				alert("User wins round, Score: Computer-"+this.computerScore+" User-"+this.userScore);
			}else {
				alert("Tie round, Score: Computer-"+this.computerScore+" User-"+this.userScore);
			}
		},
		// plays tournament
		playTournament: function(final_score){
			this.userScore = 0;
			this.computerScore = 0;
			while (this.computerScore < final_score && this.userScore < final_score){
				this.playGame();
			}
			if (userScore > computerScore) {
				alert("User wins game, Score: Computer-"+computerScore+" User-"+userScore);
			} else {
				alert("Computer wins game, Score: Computer-"+computerScore+" User-"+userScore)
			}
		}

	}




	document.getElementById("start-game-button").onclick = MYGAME.runProgram;

})();