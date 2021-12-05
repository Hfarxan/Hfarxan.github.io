let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menuItem");
let hamburger = document.querySelector(".hamburger");
let closeIcon = document.querySelector(".fa-times");
let menuIcon = document.querySelector(".fa-bars");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

