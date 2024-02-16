let sideMenu = document.querySelector(".sideMenu");
let menuIcon = document.querySelector(".menuIcon");
let closeIcon = document.querySelector(".closeIcon");

function showMenu() {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    sideMenu.style.display = "flex";
}

function closeMenu() {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
    sideMenu.style.display = "none";
}
