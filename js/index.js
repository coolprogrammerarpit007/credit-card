`use strict`;

// Storing The DOM Elements

const nameInput = document.getElementById("name");
const cardNumberInput = document.getElementById(`cnumber`);
const monthInput = document.getElementById(`month`);
const yearInput = document.getElementById(`year`);
const passwordInput = document.getElementById(`cvc`);
const formEL = document.getElementById(`cardform`);
const userName = document.querySelector(`.user-name`);
const userCardNumber = document.querySelectorAll(`.digit`);

const btn = document.getElementById(`submit`);

// Adding event to the user name element.

nameInput.addEventListener("keyup", (e) => {
  // prevent form default behaviour
  userName.textContent = nameInput.value;
});

cardNumberInput.addEventListener(`keyup`, (e) => {
  // userCardNumber.textContent = cardNumberInput.value;
  // console.log(cardNumberInput.value);
});
