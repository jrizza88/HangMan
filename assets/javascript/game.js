 // word bank
  var words = ["ARGENTINA", "MEXICO", "CANADA", "INDONESIA", "LITHUANIA", "PORTUGAL", "NICARAGUA", "SOUTH AFRICA", "NEW ZEALAND", "TURKEY", "SPAIN"];
  // global variables
    var guessesLeft =10;
    // var guessedLetter; maybe use later
    var correctLetter =[];
    // var lettersGuessed = document.getElementById("lettersGuessed");
    var wins = 0; 
    var losses = 0;
    var letterInput =[];
    var correctGuess =0;
    var displayWord =[];
    // var userGuess =[];
    var selectedWord;
    var hiddenWord =[];
     var letterCounter;

// use math.floor to randomly select word from "words" variable
var randomizedWord = words[Math.floor(Math.random() * words.length)];
console.log(randomizedWord);
 document.getElementById('guessesLeft').innerHTML = guessesLeft;

// start game by using on keyUp function
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    // console.log(userGuess);
// userGuess shows the number of times guesses were inputted. 
letterInput.push(userGuess);
document.getElementById('lettersGuessed').innerHTML = letterInput;
// letterInput.push(correctGuess);
// meant to push into HTML
 // selectedWord = words[randomizedWord];
 // selectedWord = randomizedWord[i];
  hiddenWord = randomizedWord.replace(/\S/gi, '_');
  document.getElementById("mysteryWord").innerHTML = hiddenWord;

// var counter = words;

// console.log("the random word chosen is: " + randomCountryWord());
 console.log("HiddenWord: " + hiddenWord);

// create function to compare selected letter with a letter in the selected word
      // var compareTheLetter = random.indexOf(userGuess);

    var inputLetter = 0;
    
  // compare user input to randomCountryWord
      for (var i = 0; i <= randomizedWord.length; i++) {
        // make sure anything not in the alphabet can be selected
        if (userGuess < "A" || userGuess > "Z") {
          console.log("you did not guess a letter");
              return false;
        }
        // finally getting somewhere with selectedWord
          else if(randomizedWord[i] === userGuess){
          // correctLetter[i] = userGuess;
          correctLetter[i] = userGuess;
          inputLetter++;
            // letterInput.push(correctGuess); - this put in the numbers
            document.getElementById('correctLetter').innerHTML = correctLetter;
            console.log("you choose a correct letter!: " + userGuess);
            // console.log("it's a correct guess!: " + correctGuess);
          }
            // console.log(letterCounter)
        // else if (userGuess !== randomizedWord[i]){
        //   else if (userGuess !== randomizedWord[i])  {
        //     // userGuess !== randomizedWord[i];
        //   guessesLeft--;
        //   document.getElementById('guessesLeft').innerHTML = guessesLeft;
        //   console.log("wrong guess");
        //   console.log("guessesLeft: " + guessesLeft);
        // }

      }

      if (inputLetter === 0)  {
            // userGuess !== randomizedWord[i];
          guessesLeft--;
          console.log("guessesLeft: " + guessesLeft);
          console.log(inputLetter);
          document.getElementById('guessesLeft').innerHTML = guessesLeft;
        }

  }; // closing tag of function event


function reset(){
location.reload();
};

