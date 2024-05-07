`use strict`;

// Storing The DOM Elements

const nameInput = document.getElementById("name");
const cardNumberInput = document.getElementById(`cnumber`);
const monthInput = document.getElementById(`month`);
const yearInput = document.getElementById(`year`);
const formEL = document.getElementById(`cardform`);
const userName = document.querySelector(`.user-name`);
const userCardNumber = document.getElementById(`digit`);
const inputMonth = document.getElementById(`month`);
const inputYear = document.getElementById(`year`);
const cardMonth = document.getElementById(`card-month`);
const cardYear = document.getElementById(`card-year`);
const inputCvc = document.getElementById(`cvc`);
const cardCvc = document.getElementById(`user-cv`);

const btn = document.getElementById(`submit`);

// format card information
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

// format card function
const formatCard = function () {
  userName.textContent = `JANE APPLESEED`;
  userCardNumber.textContent = `0000 0000 0000`;
  cardMonth.textContent = `00`;
  cardYear.textContent = `00`;
  cardCvc.textContent = `123`;
};

console.log(format(1234567890123456));

// Adding event to the user name element.

nameInput.addEventListener("keyup", (e) => {
  // prevent form default behaviour
  userName.textContent = nameInput.value;
});

// *********************************

// Event to the card number
cardNumberInput.addEventListener(`keyup`, (e) => {
  // Algorithum to generate UI effect of card number entering.
  // 1. get card default value,convert it into an array.
  // 2. store the length of the array
  // 3. every time user input get the length of user input and then change array[index] = userInput.value;
  // 4. Index here is length of userInput.value;

  if (cardNumberInput.value.length < 16) {
    cardNumberInput.classList.add(`invalid`);
  } else {
    cardNumberInput.classList.remove(`invalid`);
  }
  const value = format(cardNumberInput.value);
  userCardNumber.textContent = value;
});

// Event to the card date k
inputMonth.addEventListener(`keyup`, (e) => {
  if (inputMonth.value > 12 || inputMonth.value < 1) {
    inputMonth.classList.add("invalid");
  } else {
    inputMonth.classList.remove("invalid");
    cardMonth.textContent = inputMonth.value;
  }
});

inputYear.addEventListener(`keyup`, (e) => {
  cardYear.textContent = inputYear.value;
});

// Event to the card cvc

inputCvc.addEventListener(`keyup`, (e) => {
  cardCvc.textContent = inputCvc.value;
});

// ********************************
// event when form submittion happens

formEL.addEventListener("submit", (e) => {
  alert(`Your form has been submitted!`);
  e.preventDefault();
  formatCard();
  document.querySelector(`.card-details`).classList.add(`hidden`);
  document.querySelector(`.sucessful-message`).classList.remove(`hidden`);
});
