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

// below code isn't working - keep trying to debug

window.onscroll = function removeMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  }
};

// above code isn't working - keep trying to debug

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

window.onscroll = function removeTabMenu() {
  if (tabMenu.classList.contains("showTabMenu")) {
    tabMenu.classList.remove("showTabMenu");
  }
};
  
// back to top button

function scrollUp() {
  window.scrollTo(0, 0);
}

// search bar

// const sb = document.getElementById('searchbar');
// const S = document.getElementById('Search');
// const google = 'https://www.google.com/search?q=site%3A+';
// const site = 'facebook.com';

// function submitted(event) {
//   event.preventDefault();
//   const url = google + site + '+' + S.value;
//   const win = window.open(url, '_blank');
//   win.focus();
// }

// sb.addEventListener('submit', submitted);