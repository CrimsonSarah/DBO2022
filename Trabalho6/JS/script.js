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
    document.getElementById("scene1").className = "";
    document.getElementById("mainmenu").className = "main disabled";
}

document.getElementById("speedrunmode").addEventListener("click", () => { speedrunMode() });
document.getElementById("endlessmode").addEventListener("click", () => { endlessMode() });
