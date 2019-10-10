"use strict";

// Nomeo elementos que voy a necesitar
const number = document.querySelector(".number");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const alert = document.querySelector(".alert");

const handleFunction = ev => {
  ev.preventDefault();
  showMessage();
  console.log(`Mi número aleatorio es ${myRandomNumber}`);
};

const getRandomNumber = max => {
  return Math.ceil(Math.random() * max);
};

const myRandomNumber = getRandomNumber(100);

const write = (domElement, message) => {
  domElement.innerHTML = message;
};

const showMessage = () => {
  let inputValue = parseInt(input.value);
  if (inputValue === myRandomNumber) {
    write(alert, "¡HAS GANADO, CAMPEONA!");
  } else if (inputValue > myRandomNumber) {
    write(alert, "demasiado alto");
  } else {
    write(alert, "demasiado bajo");
  }
};

btn.addEventListener("click", handleFunction);
