const validationInput = document.querySelector("#validation-input")



function onValidationCheked() {
  if (validationInput.value.length >= validationInput.dataset.length) {
    validationInput.classList.add("valid")
    validationInput.classList.remove("invalid")
  }
  else {
    validationInput.classList.remove("valid")
    validationInput.classList.add("invalid")
  }
}

validationInput.addEventListener("blur", onValidationCheked)