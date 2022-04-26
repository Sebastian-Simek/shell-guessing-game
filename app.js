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

const removeReveal = () => {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
};

const gameLogic = (num1, num2) => {
    const randomGuess = Math.ceil(Math.random() * 3);
    if (randomGuess === num1) {
        wins++;
        shellOne.classList.add('reveal');
    } else if (randomGuess === num2) { 
        losses++;
        shellTwo.classList.add('reveal');
    } else {
        losses++;
        shellThree.classList.add('reveal');
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
};  

buttonOne.addEventListener('click', () => {
    removeReveal();
    gameLogic(1, 2);
});  

buttonTwo.addEventListener('click', () => {
    removeReveal();
    gameLogic(2, 1);
});  

buttonThree.addEventListener('click', () => {
    removeReveal();
    gameLogic(3, 2);
});