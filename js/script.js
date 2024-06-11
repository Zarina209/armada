const btn = document.querySelector(".header__btn-burger");
const btnClose = document.querySelector(".header__close");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("header__menu-burger");
  console.log("hl");
});
btnClose.addEventListener("click", () => {
  menu.classList.toggle("header__menu-burger");
  console.log("hl");
});
