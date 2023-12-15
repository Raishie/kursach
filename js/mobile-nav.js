// Mobile nav button
const navBtn = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".nav-icon");
const fade = document.querySelector(".mobile-nav-fade");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav__list");

// Function to toggle mobile navigation classes
function toggleMenu() {
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  menuIcon.classList.toggle("nav-icon--active");
  document.body.classList.toggle("no-scroll");
}

// Event listener for the mobile nav button
navBtn.onclick = function () {
  toggleMenu();
};

// Event listener for the fade background
fade.onclick = function () {
  toggleMenu();
};

// Event listener for each mobile menu link
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});
