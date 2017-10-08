function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var rNumber = random(1,11);
console.log(rNumber);


var guesses = 0;
var returned;


function submitGuess() {

  if (guesses < 3) {
    var guess = parseInt(document.getElementById("guess").value);

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

var eL = document.getElementById("submit");
eL.addEventListener("click", submitGuess, true);


function returnGuess(returned) {
  var newP = document.createElement("p");
  var text = document.createTextNode(returned);
  newP.appendChild(text);

  document.getElementById("guesses").appendChild(newP);
}
