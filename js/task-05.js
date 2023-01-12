const input = document.querySelector("#name-input")
const span = document.querySelector("#name-output")

input.addEventListener("input", onInputChange)
function onInputChange(event) {
  span.textContent = input.value
  if (span.textContent === "") {
    span.textContent = "Anonymous"
  }
}
