const menuOpen = document.querySelector("#menu__open");
const menuClose = document.querySelector("#menu__close");
const navbar = document.querySelector("#navbar");

function openMenu() {
  navbar.classList.remove("hidden");
  navbar.classList.add("flex");
}

function closeMenu() {
  navbar.classList.remove("flex");
  navbar.classList.add("hidden");
}

menuOpen.addEventListener("click", () => {
  openMenu();
});

menuClose.addEventListener("click", () => {
  closeMenu();
});
