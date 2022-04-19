const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function darkMode() {
  const el = document.body;
  el.classList.toggle("dark-mode");
  if (document.getElementById("icon").classList.contains("fa-toggle-off")) {
    document.getElementById("icon").classList.toggle("fa-toggle-on");
  } else {
    document.getElementById("icon").classList.toggle("fa-toggle-off");
  }
}
