const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menuBar = document.querySelector("#menu_bar");
let list = document.querySelector(".head_menu");

menuBar.addEventListener("click", () => {
  list.classList.toggle("active");
});
