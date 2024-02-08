function showMenu(){
    let menu = document.querySelector(".closeMenu");
    let menuIcon = document.querySelector(".menuIcon");
    menuIcon.style.display = "none";
    menu.style.display = "flex";
}

function closeMenu(){
    let menu = document.querySelector(".closeMenu");
    let menuIcon = document.querySelector(".menuIcon");
    menu.style.display = "none";
    menuIcon.style.display = "block";
}