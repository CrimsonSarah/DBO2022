function speedrunMode () {
    const menuscript = document.querySelector("script");
    document.getElementById("scene1").className = "";
    document.getElementById("mainmenu").className = "main disabled";
    const speedrunscript = document.createElement("script");
    speedrunscript.src = "JS/speedrun.js";
    document.querySelector("body").appendChild(speedrunscript);
    document.getElementById("mainmenu").remove();
    menuscript.remove();
}

function endlessMode () {
    const menuscript = document.querySelector("script");
    document.getElementById("scene1").className = "";
    document.getElementById("mainmenu").className = "main disabled";
    const endlessscript = document.createElement("script");
    endlessscript.src = "JS/endless.js";
    document.querySelector("body").appendChild(endlessscript);
    document.getElementById("mainmenu").remove();
    document.getElementById("scene2").remove();
    menuscript.remove();
}

document.getElementById("speedrunmode").addEventListener("click", () => { speedrunMode() });
document.getElementById("endlessmode").addEventListener("click", () => { endlessMode() });
