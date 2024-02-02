function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector(`input`);
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
const boxesArea = document.querySelector(`#boxes`);

function createBoxes() {
  const amound = input.value;
  destroyBoxes();
  if (amound >= 1 && amound <= 100) {
    let size = 30;
    for (let i = 0; i < amound; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      const randomColor = getRandomHexColor();
      box.style.backgroundColor = `${randomColor}`;
      boxesArea.append(box);
      size += 10;
    }
  }

  input.value = "";
}

//  Варіант перевірки amound і висвічування alert, що число має бути в проміжку 1 - 100.
// function createBoxes() {
//   const amound = input.value;
//   if (amound < 1 || amound > 100) {
//     alert("Please enter a number between 1 and 100.");
//     return;
//   }
// }

function destroyBoxes() {
  boxesArea.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
