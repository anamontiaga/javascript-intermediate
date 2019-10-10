"use strict";

// Nomeo elementos que voy a necesitar
const number = document.querySelector(".number");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const alert = document.querySelector(".alert");

const handleFunction = ev => {
  ev.preventDefault();
  showMessage();
  updateCounter();
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
  } else if (inputValue > myRandomNumber || inputValue < 0) {
    write(alert, "El número tiene que ser mayor que 0 y menor que 100");
  }
};

let counter = 0;

const updateCounter = () => {
  counter = counter + 1;
  write(number, counter);
};

btn.addEventListener("click", handleFunction);
