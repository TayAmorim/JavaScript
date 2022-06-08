function changeMode() {
  changeClasses()
  changeText()
  appear()
}

function changeClasses() {
  button.classList.toggle(darkModelClass)
  h1.classList.toggle(darkModelClass)
  body.classList.toggle(darkModelClass)
  footer.classList.toggle(darkModelClass)
}

function appear() {
  if (body.classList.contains(darkModelClass)) {
    text.innerHTML = 'Existe uma luz no fim do túnel'
  } else {
    text.innerHTML = ''
  }
}

function changeText() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'
  if (body.classList.contains(darkModelClass)) {
    button.innerHTML = lightMode
    h1.innerHTML = darkMode + ' ON'
    return
  }

  button.innerHTML = darkMode
  h1.innerHTML = lightMode + ' ON'
}

const darkModelClass = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const text = document.getElementsByTagName('p')[0]

button.addEventListener('click', changeMode)
