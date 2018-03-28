 // word bank
  var words = ["ARGENTINA", "MEXICO", "CANADA", "INDONESIA", "LITHUANIA", "PORTUGAL", "NICARAGUA", "SOUTHAFRICA", "NEWZEALAND", "TURKEY", "SPAIN"];
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
     var wrongGuess = [];
     var wrongGuessBank = [];

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
  hiddenWord = randomizedWord.replace(/\S/gi, '_ ');
    document.getElementById("mysteryWord").innerHTML = hiddenWord;
  document.getElementById("mysteryLetter").innerHTML = hiddenWord;

// var counter = words;

// console.log("the random word chosen is: " + randomCountryWord());
 console.log("HiddenWord: " + hiddenWord);

// create function to compare selected letter with a letter in the selected word
      // var compareTheLetter = random.indexOf(userGuess);

    var letterValue = 0;
    
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
                  letterValue++;
                   // revealLetter = randomizedWord.replace(/\S/i, userGuess);
                   hiddenWord = randomizedWord.replace(/\S/i, letterInput);
                   // document.getElementById('correctLetter').innerHTML = hiddenWord.replace(/\S/i, letterInput);
                   document.getElementById('mysteryLetter').innerHTML = hiddenWord.replace(/\S/i, userGuess);
                   // document.getElementById('mysteryWord').innerHTML = revealLetter.push;
                   // var revealTheLetter = hiddenWord.replace(/\S/g, userGuess);
                   // document.getElementById("mysteryWord").innerHTML = hiddenWord;
                   // selectedWord = randomizedWord.replace(/\s+/gi, '');
                   // var spaceIssue = randomizedWord.replace(/\s/g, userGuess);
                  // revealLetter = hiddenWord.replace(/'_'/i, \S/);
              
                  console.log("revealLetter: " + revealLetter);
                    // letterInput.push(correctGuess); - this put in the numbers
                    document.getElementById('correctLetter').innerHTML = correctLetter.slice("_");
                    // above was formely .join method
                    console.log("you choose a correct letter!: " + userGuess);
                    console.log("letterValue: " + letterValue);   
                    function replaceUnderscore(stringName) {

                    }
                    // revealLetter = randomizedWord.replace(/\S/i, userGuess[i]);
                    // document.getElementById('correctLetter').innerHTML =                     
                      // if (letterInput.indexOf(userGuess) !== -1) {
                      //        return false;
                      //     }
                }
                  //  else if (randomizedWord[i] != userGuess){
                  //   letterValue --;
                  //     if (letterValue < 0) {
                  //       return false;
                  //     }
                  // } 
              }


// SAVE THIS WHEN YOU REVEAL WORD FOR SOME REASON!!!
              // revealLetter = randomizedWord.replace(/\S/i, correctLetter[i]);

                if (letterValue === 0)  {
                  wrongGuess = letterInput.push(wrongGuessBank[0]);
                  // wrongGuess = letterInput;
                 // letterInput.push(wrongGuessBank);
                 // letterInput.push(wrongGuessBank);
                      // userGuess !== randomizedWord[i];
                    // wrongGuess.push(wrongGuessBank);
                    // letterInput.push(wrongGuessBank);
                    console.log("total wrong guesses: " + letterInput)
                     console.log("wrongGuess: " + wrongGuess)
                    console.log("wrongGuessBank: " + wrongGuessBank)
                    guessesLeft--;
                    console.log("guessesLeft: " + guessesLeft);
                    console.log("letterValue: " + letterValue);
                    document.getElementById('guessesLeft').innerHTML = guessesLeft;
                      if (letterValue < 0) {
                        return false;
                      }
                    // for (var i = 0; i< randomizedWord.length; i++) {
                     // if (wrongGuessBank.indexOf(userGuess) > 1) {
                     //  return false;
                     //  console.log("wrongGuess: " + wrongGuess)
                     //  console.log("wrong guess bank: " + wrongGuessBank)
                     // }
                    // }

                  }

            correctWord = correctLetter.join("");


        if (correctWord === randomizedWord) {
          var image = document.getElementById("earthDisplay")
          image.src="assets/images/youWon.png"
          wins++;
          document.getElementById("win-counter").innerHTML = wins++;
          revealLetter = randomizedWord.replace(/\S/i, correctLetter);
          document.getElementById('mysteryWord').innerHTML = correctWord;
          console.log("RevealLetter: " + revealLetter);
          alert("You won this round!!!");
             setInterval(function(){
                location.reload()
              }, 3000);
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
            losses ++;
            document.getElementById("loss-counter").innerHTML = losses++;
            var image = document.getElementById("earthDisplay")
             image.src="assets/images/youLose.png"
            console.log("You lose!")

  
              setInterval(function(){
                location.reload()
              }, 3000);

              // location.reload()
            }
          //   setTimeout(function(){
          //   location = ''
          // },60000)
            // alert("you lose!")

          else if(guessesLeft === -1){
               var image = document.getElementById("earthDisplay")
             image.src="assets/images/youLose.png"
             location.reload();
          }


  }; // closing tag of function event


function reset(){
location.reload();
};

