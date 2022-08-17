let menubutton=document.querySelector('.navbutton');
let menu=document.querySelector('nav');

menubutton.addEventListener('click', e => {sandwich()});
    
function sandwich() {
    if (menubutton.className === "navbutton") {
        menubutton.className += " active";
        menu.className += " active";
    } else {
        menubutton.className = "navbutton";
        menu.className = "";
    }
}

