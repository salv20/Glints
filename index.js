const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const bars = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");
const handburger = document.querySelector(".handburger");
const cancel = document.querySelector(".fa-times");
const glint = document.querySelector(".glint");
handburger.addEventListener("click", function (e) {
  nav.classList.remove("close");
  bars.classList.add("close");
});
cancel.addEventListener("click", function () {
  nav.classList.add("close");
  bars.classList.remove("close");
});
const arrowUp = document.querySelector(".fa-arrow-up");
arrowUp.addEventListener("click", function () {
  glint.scrollIntoView({ behavior: "smooth" });
});
const footer = document.querySelector("footer");
const chevron = document.querySelector(".fa-chevron-down");
chevron.addEventListener("click", function () {
  footer.scrollIntoView({ behavior: "smooth" });
});
