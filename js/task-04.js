const removeValueBtn = document.querySelector(`[data-action="decrement"]`)
const addValueBtn = document.querySelector(`[data-action="increment"]`)
const valueCalculation = document.querySelector(`#value`)
 let number = 0
const onRemoveValueBtnClick = () => {
  number = --valueCalculation.textContent
  valueCalculation.textContent = number
}
const onAddValueBtnClick = () => {
  number = ++valueCalculation.textContent
  valueCalculation.textContent = number
}

removeValueBtn.addEventListener("click", onRemoveValueBtnClick)
addValueBtn.addEventListener("click", onAddValueBtnClick)
