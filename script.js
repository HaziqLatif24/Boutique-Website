const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Hamburger menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}