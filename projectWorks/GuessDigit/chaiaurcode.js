let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(`Random number: ` + randomNumber);

const gusseSlot = document.querySelector('.guesses');
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const remaning = document.querySelector('.lastResult');
const lowOrHig = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


let preGuess = [];
let numGuesses = 0;
let playGame = true;

const p = document.createElement('p');

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Please Enter valid number`);
  }
  else if(guess > 100){
    alert(`Please Enter number less then or 100`);
  }
  else if(guess < 1){
    alert(`Please Enter number more than or 1`);
  }
  else{
    preGuess.push(guess);
    if(numGuesses === 10){
        displayGuess(guess);
        displayMessage(`Game Over Random number was ${randomNumber}`);
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`you guessed right`);
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage(`Your guess is TOO LOW`);
  }
  else{
    displayMessage(`Your guess is TOO HIGH`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  gusseSlot.innerHTML += `${guess}  ,`;
  numGuesses++;
  remaning.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message){
  lowOrHig.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = 'newGame'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuesses = 0;
    gusseSlot.innerHTML = '';
    remaning.innerHTML = `${10 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}