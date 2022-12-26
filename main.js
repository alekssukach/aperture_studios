/*Menu Icon*/
const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".header-nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("header-nav--mobile");
  menuIcon.classList.toggle("menu-icon-active");
  document.body.classList.toggle("no-scroll");
};
