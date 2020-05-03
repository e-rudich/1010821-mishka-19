var cart = document.querySelectorAll(".js-cart-btn");
var modal = document.querySelector(".item-modal");

for (var i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("item-modal--show");
  }
)};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("item-modal--show")) {
      modal.classList.remove("item-modal--show");
    }
  }
});

modal.addEventListener("click", function (evt) {
  if (evt.target === modal) {
    if (modal.classList.contains("item-modal--show")) {
      modal.classList.remove("item-modal--show");
    }
  }
});
