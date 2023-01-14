const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
]

const ingredientsArray = ingredients.map((element) => {
  const ingredient = document.createElement(`li`)
  ingredient.classList.add("item")
  ingredient.textContent = element
  return ingredient 
})
const ingredientsEl = document.querySelector("#ingredients")
ingredientsEl.append(...ingredientsArray)
