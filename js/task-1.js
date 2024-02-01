`use strict`;

const categories = document.querySelectorAll(`ul#categories li.item`);
console.log(`Numbers of categories: ${categories.length}`);

categories.forEach((item) => {
  const title = item.querySelector(`h2`).textContent;
  const elements = item.querySelectorAll(`li`);
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
