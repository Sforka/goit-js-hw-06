const removeValueBtn = document.querySelector(`[data-action="decrement"]`)
const addValueBtn = document.querySelector(`[data-action="increment"]`)
const valueCalculation = document.querySelector(`#value`)

const onRemoveValueBtnClick = () => {
  let number = 0
  number = --valueCalculation.textContent
  valueCalculation.textContent = number
}
const onAddValueBtnClick = () => {
  let number = 0
  number = ++valueCalculation.textContent
  valueCalculation.textContent = number
}

removeValueBtn.addEventListener("click", onRemoveValueBtnClick)
addValueBtn.addEventListener("click", onAddValueBtnClick)
