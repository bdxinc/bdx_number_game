var min = 1;
var max = 11;

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var rNumber = random(min,max);
console.log(rNumber);

var newP1 = document.createElement("p");
var inst = document.createTextNode("Guess a number between " + min + " and " + max + ".");
newP1.appendChild(inst);

document.getElementById("range").appendChild(newP1);



var guesses = 0;
var limit = 3;
var guess;
var total = limit - guesses;

var newP2 = document.createElement("p");
var left = document.createTextNode("Guesses remaining: " + total + "...?!");
newP2.appendChild(left);

document.getElementById("remaining").appendChild(newP2);



function submitGuess() {
  var guessEl = document.getElementById("guess");

  event.preventDefault();
  if(eL.textContent === "TRY AGAIN" || eL.textContent === "PLAY AGAIN") {
    window.location.reload();
  }

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
  guessEl.value = "";
}

var eL = document.getElementById("button");
eL.addEventListener("click", submitGuess, true);


function returnGuess(returned) {
  var newP3 = document.createElement("p");
  var text = document.createTextNode(returned);
  newP3.appendChild(text);

  document.getElementById("guesses").appendChild(newP3);

  if (guess == rNumber) {
    button.textContent = "PLAY AGAIN";
    document.getElementById("guess").style.display = "none";

  } else if (guesses >= limit){
    button.textContent = "TRY AGAIN";
    document.getElementById("guess").style.display = "none";

    var newP4 = document.createElement("p");
    var lost = document.createTextNode(rNumber + " was our number. Try again...");
    newP4.appendChild(lost);

    document.getElementById("failed").appendChild(newP4);
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
//4. Check guess (has user run out of guesses or guesses the correct number);
5. Change form display if necessary;
6. Log guess history;
7. When the game is over allow user to play again.
8. Reset game.
*/
