const hamburger = document.querySelector('.hamburger')
const hamburgerLine = document.querySelectorAll('.hamburger__line')
const menu = document.querySelector('.menu')
const body = document.body

hamburgerLine.forEach((item) => {
  hamburger.addEventListener('click', (event) => {
    item.classList.toggle('open')
    menu.classList.toggle('open')
    body.classList.toggle('open')
  })
})
