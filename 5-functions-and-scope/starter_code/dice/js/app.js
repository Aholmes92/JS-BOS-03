/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint below)
* get the first die by ID and update the class to secondDie (hint below)

3) If the Dice Roll has been hit run the diceRoll function. (hint below)

*/

// Use this to trigger a diceRoll function that you must define
document.getElementById('roll-dice').onclick = diceRoll;

// Use these to change the class of the two dice once you generate the random class
document.getElementById("first-die").className = firstDie;
document.getElementById("second-die").className = secondDie;
