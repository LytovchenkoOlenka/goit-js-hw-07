`use strict`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(`.change-color`);
const infoColor = document.querySelector(`.color`);
const body = document.querySelector(`body`);

function clickHandler() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  infoColor.textContent = randomColor;
}

changeBtn.addEventListener("click", clickHandler);
