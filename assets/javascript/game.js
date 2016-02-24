var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var guesses 
var wins 
var losses
var guesses left



 if (userGuesses == computerGuess){
        guessesLeft();
    }else{
        guessesLeft--;
    }
    document.queryselector('#guessesLeft').innerHTML="
    Guesses Left:"+ guessesLeft;