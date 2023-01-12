const validationInput = document.querySelector("#validation-input")

validationInput.addEventListener("blur", onValidationCheked)

function onValidationCheked() {
  if (validationInput.value.length < 6) {
    validationInput.classList.add("invalid")
  }
  validationInput.classList.add("valid")
}
