let menu = document.querySelector('#menu')
let navbar = document.querySelector('.header .menu')

menu.onclick = () => {
  navbar.classList.toggle('active')
}

let changeIcon = function (icon) {
  icon.classList.toggle('fa-times')
}