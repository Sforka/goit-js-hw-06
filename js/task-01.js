const categoriesEl = document.querySelector(`#categories`)
console.log("Number of categories: " + categoriesEl.childElementCount)
// console.log(
//   "Number of categories: " +
//     document.querySelector(`#categories`).childElementCount
// )

const itemEl = document.querySelectorAll(`li.item`)

itemEl.forEach((element, index) => {
  console.log("Category: " + element.firstElementChild.textContent)
  console.log("Elements: " + element.querySelectorAll(`li`).length)
})

// document.querySelectorAll(`li.item`).forEach((element, index) => {
//   console.log("Category: " + element.firstElementChild.textContent)
//   console.log("Elements: " + element.querySelectorAll(`li`).length)
// })
