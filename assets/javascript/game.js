 // word bank
  var words = ["ARGENTINA", "MEXICO", "CANADA", "INDONESIA", "LITHUANIA", "PORTUGAL", "NICARAGUA", "NIGERIA", "AUSTRALIA", "TURKEY", "SPAIN", "KAZAKHSTAN"];
  // global variables
    var correctLetter =[];
    var letterInput =[];
    var hiddenWord =[];
     var revealLetter =[];
    var correctWord =[];

  // counters
    var guessesLeft =10;
    var wins = 0; 
    var losses = 0;

// use math.floor to randomly select word from "words" variable
var randomizedWord = words[Math.floor(Math.random() * words.length)];
console.log(randomizedWord);
 document.getElementById('guessesLeft').innerHTML = guessesLeft;

 hiddenWord = randomizedWord.replace(/\S/gi, '_ ');
 document.getElementById('mysteryLetter').innerHTML = hiddenWord;
 console.log("HiddenWord: " + hiddenWord);


// start game by using on keyUp function
document.onkeyup = function(event){

    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userGuess);

    var letterValue = 0;

// userGuess shows the number of times guesses were inputted. 
    letterInput.push(userGuess);

    document.getElementById('lettersGuessed').innerHTML = letterInput;

// function replaceUnderscoreWithLetter(hiddenWord, correctLetter) {
//   return hiddenWord.replace(/_/g, correctLetter);
// }
    
         // compare user input to randomCountryWord
              for (var i = 0; i < randomizedWord.length; i++) {
                // make sure anything not in the alphabet can be selected
                if (userGuess < "A" || userGuess > "Z") {
                  console.log("you did not guess a letter!");
                      return false;
                }

                  else if(randomizedWord[i] === userGuess){

                  correctLetter[i] = userGuess;
                  revealLetter[i] = randomizedWord[i].replace(/'_ '/g, userGuess);
                   // hiddenWord = randomizedWord.replace(/'_ '/g, userGuess);
                   // document.getElementById('correctLetter').innerHTML = hiddenWord.replace(/\S/i, letterInput);
                   // document.getElementById('mysteryLetter').innerHTML = hiddenWord.push;
                  // var revealLetter = hiddenWord.replace(/'_'/i, userGuess[i]);
                  // document.getElementById('mysteryLetter').innerHTML = hiddenWord;
                  console.log("revealLetter: " + revealLetter);
                    document.getElementById('correctLetter').innerHTML = correctLetter.join(" ");
                    document.getElementById('mysteryLetter').innerHTML = revealLetter;
                    letterValue++;
                    // document.getElementById('correctLetter').innerHTML = correctLetter.slice("");
                    console.log("you choose a correct letter!: " + userGuess);
                    console.log("letterValue: " + letterValue);   
                   // revealLetter = randomizedWord.replace(/\S/i, userGuess[i]);
                }
              };

// SAVE THIS WHEN YOU REVEAL WORD FOR SOME REASON!!!
              // revealLetter = randomizedWord.replace(/_/i, correctLetter[i]);

                if (letterValue === 0)  {
                    console.log("total guesses: " + letterInput);
                    guessesLeft--;
                    console.log("guessesLeft: " + guessesLeft);
                    console.log("letterValue: " + letterValue);
                    document.getElementById('guessesLeft').innerHTML = guessesLeft;
                      if (letterValue < 0) {
                        return false;
                      }
                  }

            correctWord = correctLetter.join("");


        if (correctWord === randomizedWord) {
          var image = document.getElementById("earthDisplay")
          image.src="assets/images/youWon.png"
          wins++;
          document.getElementById("win-counter").innerHTML = wins++;
          // revealLetter = randomizedWord.replace(/_/i, correctLetter);
          document.getElementById('mysteryWord').innerHTML = correctWord;
          // console.log("RevealLetter: " + revealLetter);
          alert("You won this round!!!");
        //      setInterval(function(){
        //       var counter = document.querySelector(".counter");
        //       var content = counter.innerHTML;
        //       counter.innerHTML= content;
        //         location.reload()
        //       }, 3000);
        // } 
              setInterval(function newRandomWord(){
                  var counter = document.querySelector(".counter");
                    var content = counter.innerHTML;
                    counter.innerHTML= content;
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

          else if(guessesLeft === -1){
               var image = document.getElementById("earthDisplay")
             image.src="assets/images/youLose.png"
             location.reload();
          }


  }; // closing tag of function event


function reset(){
location.reload();
};

