var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

const subtract = document.querySelector('.subtract-btn')
subtract.addEventListener('click', decrease)

const add = document.querySelector('.add-btn')
add.addEventListener('click', increase)

function increase() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber >= 10) {
    add.removeEventListener('click', increase)
  } else {
    subtract.addEventListener('click', decrease)
  }
}

function decrease() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber <= 0) {
    subtract.removeEventListener('click', decrease)
  } else {
    add.addEventListener('click', increase)
  }
}
