const validationInput = document.querySelector("#validation-input")
console.log(validationInput.dataset.length)

validationInput.addEventListener("blur", onValidationCheked)  

function onValidationCheked() {
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.remove("invalid")
    validationInput.classList.add("valid")
  } else {
    validationInput.classList.remove("valid")
    validationInput.classList.add("invalid")
  }
  console.log(validationInput.value.length)
}

