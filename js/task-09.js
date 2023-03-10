function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

const button = document.querySelector(".change-color")
const colorName = document.querySelector(".color")
const body = document.querySelector("body")

button.addEventListener("click", getRandomBackgroundColor)

function getRandomBackgroundColor() {
  let randomColor = getRandomHexColor()
  colorName.textContent = `${randomColor}`
  body.style.backgroundColor = randomColor
  console.log(randomColor)
}
