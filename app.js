const buttonOne = document.getElementById ('button1');
const buttonTwo = document.getElementById ('button2');
const buttonThree = document.getElementById ('button3');
const winSpan = document.getElementById ('wins');
const lossSpan = document.getElementById ('losses');
const totalSpan = document.getElementById ('total');
const shellOne = document.getElementById ('shell-1');
const shellTwo = document.getElementById ('shell-2');
const shellThree = document.getElementById ('shell-3');

let wins = 0;
let losses = 0;

buttonOne.addEventListener('click', () => {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
});
buttonTwo.addEventListener('click', () => {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
});
buttonThree.addEventListener('click', () => {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
});

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

