const burgerMenu = document.querySelector(".burger-menu");
const menuVis = document.querySelector(".header__navigation");
const menuItems = document.querySelectorAll(".header__nav-link");
const section = document.querySelectorAll("section");
const footer = document.querySelector("footer");
console.log(section, footer);

function toggleMenu() {
  if (window.innerWidth < 750) {
    if (menuVis.classList.contains("header__navigation-vision")) {
      menuVis.classList.remove("header__navigation-vision");
      burgerMenu.classList.remove("burger-menu-open");
      footer.style.filter = "none";
      section.forEach((item) => (item.style.filter = "none"));
    } else {
      menuVis.classList.add("header__navigation-vision");
      burgerMenu.classList.add("burger-menu-open");
      footer.style.filter = "blur(2px)";
      section.forEach((item) => (item.style.filter = "blur(2px)"));
    }
  }
}

burgerMenu.addEventListener("click", toggleMenu);

menuItems.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});
