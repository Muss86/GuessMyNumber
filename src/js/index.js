import './../scss/index.scss';

const userNumber = document.getElementById('userNumber');
const checkMessage = document.getElementById('checkMessage');
const triesUser = document.getElementById('triesUser');
const form = document.getElementById('form');
const myGuess = Math.floor(Math.random() * 50 + 1);
let tries = 0;

form.addEventListener('submit', function (event) {
  let userGuess = Number(userNumber.value);
  let message = '';
  tries = tries + 1;
  if (userGuess === myGuess) {
    message = `Ai castigat! Numarul era ${myGuess}.`;
  }

  if (userGuess > myGuess) {
    message = 'Numarul e prea mare';
  }

  if (userGuess < myGuess) {
    message = 'Numarul este prea mic';
  }

  checkMessage.innerText = message;
  triesUser.innerText = tries;
  event.preventDefault();
});
