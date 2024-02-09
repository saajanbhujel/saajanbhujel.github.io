let menu = document.querySelector(".sideMenu");
let menuIcon = document.querySelector(".menuIcon");
let closeIcon = document.querySelector(".closeIcon");

function showMenu(){
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    menu.style.display = "flex";
}

function closeMenu(){
    menu.style.display = "none";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
}