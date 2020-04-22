var menuToggle = document.querySelector(".main-nav__menu-toggle");
var siteList = document.querySelector(".site-list");
var userList = document.querySelector(".user-list");
var salesList = document.querySelector(".sales-list");
var delivery = document.querySelector(".main-nav__delivery");
var menuHide = document.querySelector(".main-nav__list--hide");

if (siteList) {
  siteList.classList.add("main-nav__list--hide");
}

if (userList) {
  userList.classList.add("main-nav__list--hide");
}

if (salesList) {
  salesList.classList.add("main-nav__list--hide");
}

if (delivery) {
  delivery.classList.add("main-nav__list--hide");
}

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  siteList.classList.toggle("main-nav__list--hide");
  userList.classList.toggle("main-nav__list--hide");
  salesList.classList.toggle("main-nav__list--hide");
  delivery.classList.toggle("main-nav__list--hide");
});
