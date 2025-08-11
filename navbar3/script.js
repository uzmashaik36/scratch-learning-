const toggle = document.getElementById('themeToggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});