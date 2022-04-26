// import functions and grab DOM elements
const buttonOne = document.getElementById ('button1');
const buttonTwo = document.getElementById ('button2');
const buttonThree = document.getElementById ('button3');

const winSpan = document.getElementById ('wins');
const lossSpan = document.getElementById ('losses');
const totalSpan = document.getElementById ('total');

const shellOne = document.getElementById ('shell-1');
const shellTwo = document.getElementById ('shell-2');
const shellThree = document.getElementById ('shell-3');
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
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
});
buttonTwo.addEventListener('click', () => {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
}
);
buttonThree.addEventListener('click', () => {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
}
);

buttonOne.addEventListener('click', () => {
    const randomGuess = Math.ceil(Math.random() * 3);

    if (randomGuess === 1) {
        wins++;
        shellOne.classList.add('reveal');
    } else if (randomGuess === 2) { 
        losses++;
        shellTwo.classList.add('reveal');
    } else {
        losses++;
        shellThree.classList.add('reveal');
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});  


buttonTwo.addEventListener('click', () => {
    const randomGuess = Math.ceil(Math.random() * 3);

    if (randomGuess === 2) {
        wins++;
        shellTwo.classList.add('reveal');
    } else if (randomGuess === 1) { 
        losses++;
        shellOne.classList.add('reveal');
    } else {
        losses++;
        shellThree.classList.add('reveal');
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});  

buttonThree.addEventListener('click', () => {
    const randomGuess = Math.ceil(Math.random() * 3);

    if (randomGuess === 3) {
        wins++;
        shellThree.classList.add('reveal');
    } else if (randomGuess === 2) { 
        losses++;
        shellTwo.classList.add('reveal');
    } else {
        losses++;
        shellOne.classList.add('reveal');
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});  

