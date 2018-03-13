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
     var revealLetter =[];
     var correctWord =[];

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
  hiddenWord = randomizedWord.replace(/\S/gi, '_ ');
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
                   // revealLetter = randomizedWord.replace(/\S/i, userGuess);
                   hiddenWord = randomizedWord.replace(/\S/i, userGuess);
                   // selectedWord = randomizedWord.replace(/\s+/gi, '');
                   // var spaceIssue = randomizedWord.replace(/\s/g, userGuess);
                  // revealLetter = hiddenWord.replace(/'_'/i, \S/);
              
                  console.log("revealLetter: " + revealLetter);
                    // letterInput.push(correctGuess); - this put in the numbers
                    document.getElementById('correctLetter').innerHTML = correctLetter.join("");
                    // document.getElementById('mysteryWord').innerHTML = revealLetter;
                    // document.getElementById('mysteryWord').innerHTML = hiddenWord;
                    console.log("you choose a correct letter!: " + userGuess);
                    console.log("inputLetter: " + inputLetter);
                    // console.log("it's a correct guess!: " + correctGuess);
                    // if (!letterFound) {

                    // }
                  } 
              }

// SAVE THIS WHEN YOU REVEAL WORD FOR SOME REASON!!!
              // revealLetter = randomizedWord.replace(/\S/i, correctLetter[i]);

                if (inputLetter === 0)  {
                      // userGuess !== randomizedWord[i];
                    guessesLeft--;
                    console.log("guessesLeft: " + guessesLeft);
                    console.log(inputLetter);
                    document.getElementById('guessesLeft').innerHTML = guessesLeft;
                  }


            correctWord = correctLetter.join("");


        if (correctWord === randomizedWord) {
          var image = document.getElementById("earthDisplay")
          image.src="../images/youWon.png";
          wins++;
          document.getElementById("win-counter").innerHTML = wins;
          revealLetter = randomizedWord.replace(/\S/i, correctLetter[i]);
          document.getElementById('mysteryWord').innerHTML = revealLetter;
          alert("You won this round!!!");
          location.reload();
        } 

          else if (guessesLeft === 9){
            console.log("you have 9 guesses left!");
            var image = document.getElementById("earthDisplay")
            image.src="assets/images/earth9.png"
          }

           else if (guessesLeft === 8){
            console.log("you have 8 guesses left!");
            var image = document.getElementById("earthDisplay")
            image.src="assets/images/earth8.png"
          }
           else if (guessesLeft === 7){
            console.log("you have 7 guesses left!");
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/earth7.png"
          }

           else if (guessesLeft === 6){
            console.log("you have 6 guesses left!");
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/earth6.png"
          }

           else if (guessesLeft === 5){
            console.log("you have 5 guesses left!");
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/earth5.png"
          }
           else if (guessesLeft === 4){
            console.log("you have 4 guesses left!");
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/earth4.png"
          }
           else if (guessesLeft === 3){
            console.log("you have 3 guesses left!");
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/earth3.png"
          }
           else if (guessesLeft === 2){
            console.log("you have 2 guesses left!");
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/earth2.png"
          }
           else if (guessesLeft === 1){
            console.log("you have 1 guesses left!");
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/earth1.png"
          }

          else if(guessesLeft === 0){
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/youLose.png"
            console.log("You lose!")
            alert("you lose!")
            location.reload();

          }

          else if(guessesLeft === -1){
               var image = document.getElementById("earthDisplay")
             image.src="assets/images/youLose.png"
            location.reload();
          }


  }; // closing tag of function event


function reset(){
location.reload();
};

