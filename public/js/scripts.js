// Scripts

// hamburger drop-down menu

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const menuIcon = document.querySelector(".hburgmenu .fa-bars");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menuIcon.style.display = "none";
  }
};

//nav bar drop-down menu

const tabMenu = document.querySelector(".tab-drop-down-menu");
const tabMenuItems = document.querySelectorAll(".tabMenuItem");

function tabDropDown(){
  if (tabMenu.classList.contains("showTabMenu")) {
    tabMenu.classList.remove("showTabMenu");
  } else {
    tabMenu.classList.add("showTabMenu");
  }
};

// back to top button

function scrollUp() {
  window.scrollTo(0, 0);
}