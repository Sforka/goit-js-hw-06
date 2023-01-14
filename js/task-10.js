function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}


const input = document.querySelector(`[type="number"]`)
const createBtn = document.querySelector(`[data-create]`)
const destroyBtn = document.querySelector(`[data-destroy]`)
const boxes = document.querySelector(`#boxes`)

createBtn.addEventListener("click", onCreateBoxes)

function onCreateBoxes() {
  const boxArray = []
  for (let i = 1; i <= input.value; i++) {
    const box = document.createElement("div")
    box.classList.add("box")
    box.style.width = 20 + i * 10 + "px"
    box.style.height = 20 + i * 10 + "px"
    box.style.backgroundColor = getRandomHexColor()
    console.log(box)
    boxArray.push(box)
  }
  boxes.append(...boxArray)
}

destroyBtn.addEventListener("click", onDestroyBoxes)

function onDestroyBoxes() {
  boxes.innerHTML = "";
  input.value = ""
}
