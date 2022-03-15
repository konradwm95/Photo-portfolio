const hamburgerMenu = document.querySelector(".hamburger-menu")

const dropdownMenu = document.querySelector(".drop-down-menu")
const menu = document.querySelector("nav.menu")
const menuUl = document.querySelector(".drop-down-menu .categories")
const menuAdress = document.querySelector(".drop-down-menu .adress")

hamburgerMenu.addEventListener("click", () => {
  dropdownMenu.classList.toggle("menu-hidden")
  menu.classList.toggle("menu-open")
  menuUl.classList.toggle("menu-categories-hidden")
  menuAdress.classList.toggle("menu-adress-hidden")
})
