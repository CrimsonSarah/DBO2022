//VARIÁVEIS

//valores
let ascensionbonus;
let passivevalue;
let clickvalue;
let totalscore;
let timermin;
let timersec;

//custos
let passivecost;
let clickcost;

//booleans
let ascensionspawned;
let gnomespawned;
let forcespawn;

//elementos HTML
const passivecosttext = document.getElementById("passiveCost");
const passiveupgrade = document.getElementById("passiveUp");
const clickcosttext = document.getElementById("clickCost");
const clickupgrade = document.getElementById("clickUp");
const timertext = document.getElementById("timerText");
const main = document.getElementById("mainButton");
let ascensionbutton;
let gnomebutton;
let gnome;

//audio
const clickerrorsound = new Audio("SFX/clickerror.mp3");
const clicksound = new Audio("SFX/click.mp3");
const gnomed = new Audio("SFX/gnomed.mp3");

//intervalos
let ascensionspawninterval;
let gnomespawninterval;


//RETORNAR VARIÁVEIS DO CACHE

//valores
if (!localStorage.getItem("ascensionbonus")) {
    ascensionbonus = 1;
} else {
    ascensionbonus = parseInt(localStorage.getItem("ascensionbonus"));
}

if (!localStorage.getItem("passivevalue")) {
    passivevalue = 0;
} else {
    passivevalue = parseInt(localStorage.getItem("passivevalue"));
}

if (!localStorage.getItem("clickvalue")) {
    clickvalue = 1;
} else {
    clickvalue = parseInt(localStorage.getItem("clickvalue"));
}

if (!localStorage.getItem("totalscore")) {
    totalscore = 0;
} else {
    totalscore = parseInt(localStorage.getItem("totalscore"))
}

if (!localStorage.getItem("timermin")) {
    timermin = 0;
} else {
    timermin = parseInt(localStorage.getItem("timermin"));
}

if (!localStorage.getItem("timersec")) {
    timersec = 0;
} else {
    timersec = parseInt(localStorage.getItem("timersec"))
}

//custos
if (!localStorage.getItem("passivecost")) {
    passivecost = 15;
} else {
    passivecost = parseInt(localStorage.getItem("passivecost"))
}

if (!localStorage.getItem("clickcost")) {
    clickcost = 20;
} else {
    clickcost = parseInt(localStorage.getItem("clickcost"))
}

//booleans
if (!localStorage.getItem("gnomespawned")) {
    gnomespawned = false;
} else {
    gnomespawned = (localStorage.getItem("gnomespawned") === "true");
}

if (gnomespawned == true) {
    gnome = document.createElement("div");
    gnome.id = "gnome";
    document.getElementById("scene1").appendChild(gnome);
    gnomeClick();
}

if (!localStorage.getItem("ascensionspawned")) {
    ascensionspawned = false;
} else {
    ascensionspawned = (localStorage.getItem("ascensionspawned") === "true");
}

if (ascensionspawned == true) {
    forcespawn = true;
    spawnAscension();
    forcespawn = false;
}



//FUNÇÕES
function updateText(element, text) {
    element.innerHTML = text.toString();
}

function timer() {
    if (timersec >= 59) {
        timermin += 1;
        timersec = 0;
    } else {
        timersec += 1;
    }

    if (timermin < 10) {
        if (timersec < 10) {
            updateText(timertext, "0" + timermin + ":" + "0" + timersec);
        } else {
            updateText(timertext, "0" + timermin + ":" + timersec);
        }
    } else {
        if (timersec < 10) {
            updateText(timertext, timermin + ":" + "0" + timersec);
        } else {
            updateText(timertext, timermin + ":" + timersec);
        }
    }

    localStorage.setItem("timersec", timersec);
    localStorage.setItem("timermin", timermin);
}

function click() {
    clicksound.play();
    totalscore += clickvalue;
    updateText(main, totalscore);
}

function income() {
    totalscore += passivevalue;
    updateText(main, totalscore);

    localStorage.setItem("totalscore", totalscore);
}

function upgradeClick() {
    if (totalscore >= clickcost) {
        clicksound.play();
        totalscore -= clickcost;
        clickcost = Math.ceil(clickcost * 1.181);
        clickvalue = Math.ceil(clickvalue * 1.089 * ascensionbonus);
        updateText(main, totalscore);
        updateText(clickupgrade, "Upgrade Click" + "<br>" + "+" + clickvalue);
        updateText(clickcosttext, "Cost: " + clickcost);

        localStorage.setItem("clickcost", clickcost);
        localStorage.setItem("clickvalue", clickvalue);
    } else {
        clickerrorsound.play();
    }
}

function upgradePassive() {
    if (totalscore >= passivecost) {
        clicksound.play();
        if (passivevalue == 0) {
            totalscore -= passivecost;
            passivecost = Math.ceil(passivecost * 1.2);
            passivevalue = Math.ceil(1 * ascensionbonus);
            updateText(main, totalscore);
            updateText(passiveupgrade, "Upgrade Income" + "<br>" + "+" + passivevalue);
            updateText(passivecosttext, "Cost: " + passivecost);

            localStorage.setItem("passivecost", passivecost);
            localStorage.setItem("passivevalue", passivevalue);
        } else {
            totalscore -= passivecost;
            passivecost = Math.ceil(passivecost * 1.2);
            passivevalue = Math.ceil(passivevalue * 1.142 * ascensionbonus);
            updateText(main, totalscore);
            updateText(passiveupgrade, "Upgrade Income" + "<br>" + "+" + passivevalue);
            updateText(passivecosttext, "Cost: " + passivecost);

            localStorage.setItem("passivecost", passivecost);
            localStorage.setItem("passivevalue", passivevalue);
        }
    } else {
        clickerrorsound.play();
    }
}

function gnomeButtonClick() {
    if (Math.ceil(Math.random() * 100 * ascensionbonus) >= 79) {
        clicksound.play();
        totalscore += Math.ceil(totalscore / 3);
    } else {
        gnomed.play();
        totalscore -= Math.ceil(totalscore / 3);
    }
    updateText(main, totalscore);
}

function gnomeClick() {
    const newsubpanel = document.createElement("div");
    newsubpanel.className = "subpanel crimsontext";
    document.querySelector(".buttons").appendChild(newsubpanel);

    document.getElementById("gnome").remove();
    const gnometext = document.createElement("p")
    gnometext.innerText = "⠀⠀⠀⠀⠀⠀";
    newsubpanel.appendChild(gnometext);

    gnomebutton = document.createElement("button");
    gnomebutton.id = "gnomeButton";
    newsubpanel.appendChild(gnomebutton);
    gnomebutton.addEventListener("click", () => { gnomeButtonClick() });

    setInterval("updateText(gnomebutton, 'Gamble with Gnome' + '<br>' + '±' + Math.ceil(totalscore/3))", 16.66);
    localStorage.setItem("gnomespawned", true);
}

function spawnGnome() {
    if (Math.ceil(Math.random() * 100) >= 67) {
        if (!document.getElementById("gnome") && !document.getElementById("gnomeButton")) {
            gnome = document.createElement("div");
            gnome.id = "gnome";
            document.getElementById("scene1").appendChild(gnome);
            gnome.addEventListener("click", () => { gnomeClick() });
        } else {
            clearInterval(gnomespawninterval);
        }
    } else {
        return;
    }
}

function ascend() {
    clicksound.play();

    ascensionbonus += 0.1;
    passivevalue = 0;
    passivecost = 15;
    clickvalue = Math.ceil(1 * ascensionbonus);
    clickcost = 20;
    totalscore = 0;

    localStorage.setItem("ascensionbonus", ascensionbonus);
    localStorage.setItem("passivevalue", passivevalue);
    localStorage.setItem("passivecost", passivecost);
    localStorage.setItem("clickvalue", clickvalue);
    localStorage.setItem("clickcost", clickcost);
    localStorage.setItem("totalscore", totalscore);

    updateText(main, totalscore);
    updateText(clickupgrade, "Upgrade Click" + "<br>" + "+" + clickvalue);
    updateText(clickcosttext, "Cost: " + clickcost);
    updateText(passiveupgrade, "Upgrade Income" + "<br>" + "+" + passivevalue);
    updateText(passivecosttext, "Cost: " + passivecost);

    document.querySelector(".ascensionpanel").remove();
    ascensionspawninterval = setInterval("spawnAscension()", 1000);
}

function spawnAscension () {
    if (!document.getElementById("ascensionButton")) {
        if (totalscore >= 1e5 * ascensionbonus || forcespawn == true) {
            if (ascensionspawninterval) {
                clearInterval(ascensionspawninterval);
            }
    
            const newsubpanel = document.createElement("div");
            newsubpanel.className = "subpanel crimsontext ascensionpanel";
            document.querySelector(".buttons").appendChild(newsubpanel);
    
            const ascensiontext = document.createElement("p")
            ascensiontext.innerText = "Cost: EVERYTHING."
            newsubpanel.appendChild(ascensiontext);
    
            ascensionbutton = document.createElement("button");
            ascensionbutton.id = "ascensionButton";
            newsubpanel.appendChild(ascensionbutton);
            ascensionbutton.addEventListener("click", () => { ascend() });
    
            updateText(ascensionbutton, "Ascend");
            localStorage.setItem("ascensionspawned", true);
        }
    }
}



//RUNTIME

//adiciona eventos aos botões
main.addEventListener("click", () => { click() });
clickupgrade.addEventListener("click", () => { upgradeClick() });
passiveupgrade.addEventListener("click", () => { upgradePassive() });

//atualiza os textos pra ficar compatível com as variaveis do local storage
updateText(main, totalscore);
updateText(passivecosttext, "Cost: " + passivecost);
updateText(passiveupgrade, "Upgrade Income" + "<br>" + "+" + passivevalue);
updateText(clickcosttext, "Cost: " + clickcost);
updateText(clickupgrade, "Upgrade Click" + "<br>" + "+" + clickvalue);

if (timermin < 10) {
    if (timersec < 10) {
        updateText(timertext, "0" + timermin + ":" + "0" + timersec);
    } else {
        updateText(timertext, "0" + timermin + ":" + timersec);
    }
} else {
    if (timersec < 10) {
        updateText(timertext, timermin + ":" + "0" + timersec);
    } else {
        updateText(timertext, timermin + ":" + timersec);
    }
}


//aciona os intervalos
setInterval("timer()", 1000);
setInterval("income()", 1000);
gnomespawninterval = setInterval("spawnGnome()", 15000);
ascensionspawninterval = setInterval("spawnAscension()", 1000);

