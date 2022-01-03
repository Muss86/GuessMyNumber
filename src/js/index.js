import './../scss/index.scss';

const userNumber = document.getElementById('userNumber');
const checkMessage = document.getElementById('checkMessage');
const triesUser = document.getElementById('triesUser');
const form = document.getElementById('form');
const myGuess = Math.floor(Math.random() * 50 + 1);
const win = document.getElementById('win');
let tries = 0;

form.addEventListener('submit', function (event) {
  let userGuess = Number(userNumber.value);
  let message = '';
  tries = tries + 1;

  if (userGuess === 0 || userGuess < 1 || userGuess > 50) {
    message = `Trebuie sa introduci un numar intre 1 si 50`;
    userNumber.value = '';
  } else if (userGuess === myGuess) {
    message = `Ai castigat! Numarul era ${myGuess}.`;
    win.classList.add('winner');
    userNumber.value = '';
  } else if (Math.abs(userGuess - myGuess) <= 10 && userGuess > myGuess) {
    message = `Numarul ${userGuess} este mare dar nu cu mult`;
    userNumber.value = '';
  } else if (userGuess > myGuess) {
    message = `Numarul ${userGuess} e prea mare`;
    userNumber.value = '';
  } else if (Math.abs(userGuess - myGuess) <= 10 && userGuess < myGuess) {
    message = `Numarul ${userGuess} este mic dar nu cu mult`;
    userNumber.value = '';
  } else if (userGuess < myGuess) {
    message = `Numarul ${userGuess} este prea mic`;
    userNumber.value = '';
  }

  checkMessage.innerText = message;
  triesUser.innerText = tries;

  event.preventDefault();
});
