const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = [];
ingredients.forEach((element) => {
  const ingredient = document.createElement(`li`);
  ingredient.classList.add('item');
  ingredient.textContent = element;
  ingredientsArray.push(ingredient);
})
const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...ingredientsArray);
