const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")
text.style.fontSize = input.value + "px"
input.addEventListener("change", onInputChange)
function onInputChange(event) {
  text.style.fontSize = input.value + "px"
}
