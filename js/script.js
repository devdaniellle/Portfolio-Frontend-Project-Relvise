// on/off navbar(header) menu

let menu = document.querySelector('#menu')
let navbar = document.querySelector('.header .menu')

menu.onclick = () => {
  navbar.classList.toggle('active')
}

let changeIcon = function (icon) {
  icon.classList.toggle('fa-times')
}

// show/hide navbar(header) menu

const nav = document.getElementById('navbar')
let main = document.getElementById('major-block')
var mainHeight = main.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY > mainHeight*0.85) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
})

// hide navbar(header) after click on each element

navbar.addEventListener('click', () => {
  navbar.classList.remove('active')
})