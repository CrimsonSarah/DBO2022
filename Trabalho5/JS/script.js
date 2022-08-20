let bmenu=document.querySelector('.nav_icon');
let lmenu=document.querySelector('nav');

bmenu.addEventListener('click', e => {myMenu()});
    
    function myMenu() {
        
        if (bmenu.className === "nav_icon") {
            bmenu.className += " active";
            lmenu.className += " active";
          
 
        } else {
            bmenu.className = "nav_icon";
            lmenu.className = "";
        }

    }
