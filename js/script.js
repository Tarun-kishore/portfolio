const toggleButton = document.querySelector("button.navToggle");
const hamburger = document.querySelector("span.hamburger");
const list = document.querySelector(".list");

toggleButton.onclick = (e) => {
  list.classList.toggle("list");
  list.classList.toggle("list-toggled");

  hamburger.classList.toggle("hamburger");
  hamburger.classList.toggle("hamburger-toggled");
};
