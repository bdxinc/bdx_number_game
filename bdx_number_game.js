function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var rNumber = random(1,11);
console.log(rNumber);


var guesses = 0;
var limit = 3;
var guess;

function submitGuess() {
  var returned;

  if (guesses < limit) {
    guess = parseInt(document.getElementById("guess").value);

    guesses++;

    if(guess > rNumber) {
      returned = guess + " is too high.";
    } else if(guess < rNumber) {
      returned = guess + " is too low.";
    } else {
      returned = "You guessed correctly!";
    }

    returnGuess(returned);
  }
}

var eL = document.getElementById("button");
eL.addEventListener("click", submitGuess, true);


function returnGuess(returned) {
  var newP = document.createElement("p");
  var text = document.createTextNode(returned);
  newP.appendChild(text);

  document.getElementById("guesses").appendChild(newP);

  if (guess == rNumber) {
    button.textContent = "PLAY AGAIN";
  } else if (guesses >= limit){
    button.textContent = "TRY AGAIN";
  }
}

/*
**************
vv NONSENSE vv
**************

**SELECTION**


Here is a little breakdown of the flow of the game...

//1. User inputs a number;
//2. Button is clicked to submit guess;
/3. Validate user input;
4. Check guess (has user run out of guesses or guesses the correct number);
5. Change form display if necessary;
6. Log guess history;
7. When the game is over allow user to play again.
8. Reset game.
*/
