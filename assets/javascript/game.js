 // word bank
  var words = ["Argentina", "Mexico", "Lithuania", "Portugal", "Nicaragua", "South Africa", "New Zealand", "Turkey", "Spain"];
  // global variables
    var guesses = 9;
    var guessesLeft =[];
    // var guessedLetter; maybe use later
    var guessedLetter =[];
    // var lettersGuessed = document.getElementById("lettersGuessed");
    var wins = 0; 
    var losses = 0;
    var letterInput =[];
    var correctGuess =[];
    var wrongGuess =[];
    var displayWord =[];
    // var userGuess =[];
    var selectedWord;
    var hiddenWord;

// use math.floor to randomly select word from "words" variable
var randomizedWord = Math.floor(Math.random() * words.length);
console.log(randomizedWord);

// DIRECTIONS //

// start game by using on keyUp function
// make a variable to make the user guess option
// use math.floor to randomly select word from "words" variable
// use for loop to match user selection to random selection letters
// make a way for user input to match the random word
// have a comparision for human letters to randomized selected letters
// convert the randomized words to an _
// reveal correct letters when user makes correct choice (for loop)
// subtract score when wrong word is used
// game over when no more guesses left

// start game by using on keyUp function
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userGuess);
     // make sure anything not in the alphabet can be selected
  // randomCountryWord();
// var letterClick = 0;
letterInput.push(userGuess);
 selectedWord = words[randomizedWord];
 hiddenWord = selectedWord.replace(/\S/gi, '_');
// console.log("the random word chosen is: " + randomCountryWord());
 console.log("selected word: " + selectedWord + ". HiddenWord: " + hiddenWord);

// create function to compare selected letter with a letter in the selected word
      // var compareTheLetter = random.indexOf(userGuess);
    
  // compare user input to randomCountryWord


      for (var i = 0; i <= words.length; i++) {
        if (userGuess < "A" || userGuess > "Z") {
          console.log("you did not guess a letter");
        }
        // finally getting somewhere with selectedWord
        else if(userGuess === selectedWord[i]) {
          correctGuess[i] = userGuess;
            correctGuess++;
            console.log("you choose a correct letter!");
        } else {
          console.log("you choose the wrong letter!")
          wrongGuess++;
          guesses--;
        }
      }

  }; // closing tag of function event


        // if (userGuess < "A" || userGuess > "Z") {
        //     // return false
        //     console.log("you did not guess a letter");
        // } else if (userGuess === selectedWord) {
        //   console.log("you choose a correct letter!");

        // } else {
        //   console.log("you choose the wrong letter!");
        //     guesses--;
        // }
    

// create function to initalize the game

// function init(){
//   // randomCountryWord();
//   // displayLetter();
//   // startGame();
//   // randomCountryWord();
//   // set guesed left
//  //  var guessesLeft = 7;
//  //  // create variable to update incorrect guesses
//  //  var wrongGuesses = [];
//  //  // correct guesses
//  // var correctGuesses = [];
//  //  // not sure if this should be used - reset();
// }

// create function to generate and randomize selected word

 // return words[random];






  // if correct, display/reveal correct letter

  // if incorrect subtract guesses left


// create function to reset the game

function reset(){
}

// set init(); to initalize the game once completed




// function randomCountryWord(){
//  var random = Math.floor(Math.random() * words.length)
//  // return words[random];
//  selectedWord = words[random];
//  hiddenWord = selectedWord.replace(/\S/gi, '_');
// }


 // function compareLetters(letters){
 //      var compareTheLetter = random.indexOf(userGuess);
 //  // compare user input to randomCountryWord
 //      for (var i = 0; i <= words.length; i++) {
 //        if (userGuess === correctLetter) {
 //            correctGuess++;
 //        } else {
 //          incorrectGuess++;
 //          guessesleft --;
 //        }
 //      }
 //  // if correct, display/reveal correct letter

 //  // if incorrect subtract guesses left
 // }
