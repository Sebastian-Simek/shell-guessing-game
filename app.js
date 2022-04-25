// import functions and grab DOM elements
const buttonOne = document.getElementById ('button1');
const buttonTwo = document.getElementById ('button2');
const buttonThree = document.getElementById ('button3');

const winSpan = document.getElementById ('wins');
const lossSpan = document.getElementById ('losses');
const totalSpan = document.getElementById ('total');

const ballOne = document.getAnimations ('hidden1');
const ballTwo = document.getAnimations ('hidden2');
const ballThree = document.getAnimations ('hidden3');

// let state
let wins = 0;
let losses = 0;

//console.log(buttonOne, buttonTwo, buttonThree, winSpan, lossSpan, totalSpan);
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // if button 1 = the random number, increase wins by one. ***later*** hide and reveal the ball
//const randomGuess = Math.ceil(Math.random() * 3); 

buttonOne.addEventListener('click', () => {
    const randomGuess = Math.ceil(Math.random() * 3);
    
    if (randomGuess === 1) {
        wins++;
    } else { 
        losses++;
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});  

buttonTwo.addEventListener('click', () => {
    const randomGuess = Math.ceil(Math.random() * 3);
  
    if (randomGuess === 1) {
        wins++;
    } else { 
        losses++;
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});  

buttonThree.addEventListener('click', () => {
    const randomGuess = Math.ceil(Math.random() * 3);
  
    if (randomGuess === 1) {
        wins++;
    } else { 
        losses++;
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});  
