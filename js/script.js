const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const guessesRemainingElement = document.querySelector(".remaining");
const guessesRemainingSpan = document.querySelector(".remaining span")
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector("#play again");

const word = "magnolia";
const guessedLetters = [];

//Placeholder symbols for word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }

    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    //empty message
    guessMessage.innerText = "";
    const guess = letterInput.value; 
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
      }

    letterInput.value = "";

});

//Making sure the user inputs a single letter, from A to Z
const validateInput = function (input)  {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        guessMessage.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        guessMessage.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        guessMessage.innerText = "Please enter a letter from A to Z.";
    }   else {
        return input;
    };
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        guessMessage.innerText = "You already guessed that one! Try again!";
    }   else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};