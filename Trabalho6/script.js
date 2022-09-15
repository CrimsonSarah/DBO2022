// mover cursor 2 - automático
// function moverdireita() {
//     div2.style.left = parseInt(getComputedStyle(div2).left) + 5;
//     if (parseInt(getComputedStyle(div2).left) >= 500 - parseInt(getComputedStyle(div2).width)) {
//         clearInterval(m);
//         m = setInterval("moveresquerda()", 15);
//     }
// }
// function moveresquerda() {
//     div2.style.left = parseInt(getComputedStyle(div2).left) - 5;
//     if (parseInt(getComputedStyle(div2).left) <= 0) {
//         clearInterval(m);
//         m = setInterval("moverdireita()", 15);
//     }
// }

// // Mover cursor 1  - através dos botões
// function move(Direcao) {
//     if (contador != 0) {
//         para();
//     }
//     if (Direcao == "direita") {
//         timer = setInterval("direita()", 15);
//         contador++;
//     }

//     if (Direcao == "esquerda") {
//         timer = setInterval("esquerda()", 15);
//         contador++;
//     }

//     if (Direcao == "acima") {
//         timer = setInterval("acima()", 15);
//         contador++;
//     }

//     if (Direcao == "baixo") {
//         timer = setInterval("baixo()", 15);
//         contador++;
//     }
// }
// function direita() {
//     div1.style.left = parseInt(getComputedStyle(div1).left) + 5;
//     if (parseInt(getComputedStyle(div1).left) >= 900 - parseInt(getComputedStyle(div1).left)) {
//         clearInterval(timer);
//         timer = setInterval("esquerda()", 15);
//     }
// }

// function esquerda() {
//     div1.style.left = parseInt(getComputedStyle(div1).left) - 5;
//     if (parseInt(div1.style.left) <= 0) {
//         clearInterval(timer);
//         timer = setInterval("direita()", 15);
//     }
// }

// function baixo() {
//     div1.style.top = parseInt(getComputedStyle(div1).top) + 5;
//     if (parseInt(getComputedStyle(div1).top) >= 300 - parseInt(getComputedStyle(div1).height)) {
//         clearInterval(timer);
//         timer = setInterval("acima()", 15);
//     }
// }
// function acima() {
//     div1.style.top = parseInt(getComputedStyle(div1).top) - 5;
//     if (parseInt(getComputedStyle(div1).top) <= 0) {
//         clearInterval(timer);
//         timer = setInterval("baixo()", 15);
//     }
// }

// // Parar cursores
// function para2() {
//     clearInterval(m);
// }
// function para() {
//     clearInterval(timer);
// }



// function altura(parametro) {
//     div1.style.height = parseInt(getComputedStyle(div1).height) + parametro;
// }

// function largura(parametro) {
//     div1.style.width = parseInt(getComputedStyle(div1).width) + parametro;
// }
// function cor() {
//     if (cont == 0) {
//         document.getElementById("div1").style.backgroundColor = "blue";
//         cont++;
//     } else {
//         if (cont == 1) {
//             document.getElementById("div1").style.backgroundColor = "orange";
//             cont++;
//         } else {
//             if (cont == 2) {
//                 document.getElementById("div1").style.backgroundColor = "yellow";
//                 cont = 0;
//             }
//         }
//     }

// }

// function colisao() {
//     if (((parseInt(getComputedStyle(div1).left) >= parseInt(getComputedStyle(div2).left)) && (parseInt(getComputedStyle(div1).left) <= parseInt(getComputedStyle(div2).left) + 50)) &&
//         ((parseInt(getComputedStyle(div1).top) >= parseInt(getComputedStyle(div2).top)) && (parseInt(getComputedStyle(div1).top) <= parseInt(getComputedStyle(div2).top) + 50))) {
//         para2();
//         para();
//     }
//     if (((parseInt(getComputedStyle(div2).left) >= parseInt(getComputedStyle(div1).left)) && (parseInt(getComputedStyle(div2).left) <= parseInt(getComputedStyle(div1).left) + 50)) &&
//         ((parseInt(getComputedStyle(div2).top) >= parseInt(getComputedStyle(div1).top)) && (parseInt(getComputedStyle(div2).top) <= parseInt(getComputedStyle(div1).top) + 50))) {
//         para2();
//         para();
//     }
// }


//Ao carregar a página estas linhas são executadas. Funções que são chamadas a cada 15 e 5 milisegundos
// let contador = 0;
// let cont = 0;    

// document.querySelector("#acima").addEventListener("click", () => { move('acima') });
// document.querySelector("#esquerda").addEventListener("click", () => { move('esquerda') });
// document.querySelector("#direita").addEventListener("click", () => { move('direita') });
// document.querySelector("#baixo").addEventListener("click", () => { move('baixo') });
// document.querySelector("#acima").addEventListener("click", () => { move('acima') });
// document.querySelector("#alturaMais").addEventListener("click", () => { altura(5) });
// document.querySelector("#alturaMenos").addEventListener("click", () => { altura(-5) });
// document.querySelector("#larguraMais").addEventListener("click", () => { largura(5) });
// document.querySelector("#larguraMenos").addEventListener("click", () => { largura(-5) });
// document.querySelector("#cor").addEventListener("click", () => { cor() });
// document.querySelector("#para").addEventListener("click", () => { para() });
// document.querySelector("#para2").addEventListener("click", () => { para2() });


//valores
let passivevalue = 0;
let clickvalue = 1;
let totalscore = 0;

//custos
let passivecost = 15;
let clickcost = 20;

//elementos HTML
let passivecosttext = document.getElementById("passiveCost");
let passiveupgrade = document.getElementById("passiveUp");
let clickcosttext = document.getElementById("clickCost");
let clickupgrade = document.getElementById("clickUp");
let main = document.getElementById("mainButton");

//audio
const clicksound = new Audio("SFX/click.mp3");
const clickerrorsound = new Audio("SFX/clickerror.mp3");

//funções
function updateText (element, text) {
    element.innerHTML = text.toString();
}

function click () {
    clicksound.play();
    totalscore += clickvalue;
    updateText (main, totalscore);
}

function income () {
    totalscore += passivevalue;
    updateText (main, totalscore);
}

function upgradeClick () {
    if (totalscore >= clickcost) {
        clicksound.play();
        totalscore -= clickcost;
        clickcost = Math.ceil(clickcost * 1.125);
        clickvalue = Math.ceil(clickvalue * 1.11);
        updateText (main, totalscore);
        updateText (clickupgrade, "Upgrade Click" + "<br>" + "+" + clickvalue);
        updateText (clickcosttext, "Cost: " +  clickcost);
    } else {
        clickerrorsound.play();
    }
}

function upgradePassive () {
    if (totalscore >= passivecost) {
        clicksound.play();
        if (passivevalue == 0) {
            totalscore -= passivecost;
            passivecost = Math.ceil(passivecost * 1.125);
            passivevalue = 1;
            updateText(main, totalscore);
            updateText(passiveupgrade, "Upgrade Income" + "<br>" + "+" + passivevalue);
            updateText(passivecosttext, "Cost: " + passivecost);
        } else {
            totalscore -= passivecost;
            passivecost = Math.ceil(passivecost * 1.125);
            passivevalue = Math.ceil(passivevalue * 1.132);
            updateText (main, totalscore);
            updateText (passiveupgrade, "Upgrade Income" + "<br>" + "+" + passivevalue);
            updateText (passivecosttext, "Cost: " +  passivecost);
        }
    } else {
        clickerrorsound.play();
    }
}

//executa ao rodar o script
main.addEventListener("click", () => {click()});
clickupgrade.addEventListener("click", () => {upgradeClick()});
passiveupgrade.addEventListener("click", () => {upgradePassive()});
setInterval("income()", 1000);
