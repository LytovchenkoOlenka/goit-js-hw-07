`use strict`;

const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

textInput.addEventListener("input", (greating) => {
  const inputValue = greating.currentTarget.value.trim();
  const outputValue = inputValue === "" ? "Anonymous" : inputValue;
  textOutput.textContent = outputValue;
});
