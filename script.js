const hamburguesa = document.querySelector("#hamburger");
const menu = document.querySelector("#nav-links");

hamburguesa.addEventListener("click", function () {
  menu.classList.toggle("active");
});
