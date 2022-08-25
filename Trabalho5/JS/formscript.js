let fieldsets = document.getElementsByTagName("fieldset");
let formbutton2 = document.getElementById("formbutton2");
let formbutton = document.getElementById("formbutton");
let inputs = document.getElementsByTagName ("input");
let avisos = document.querySelectorAll(".aviso");
let resultados = [];
let proceed = true;
let bools = [];
let i = 0;

formbutton.addEventListener('click', e => {form()});

function form() {
    switch (i) {
        case 0:
            proceed = true;
            if (inputs[0].value != "") {bools[0] = true;} else {bools[0] = false;} 
            if (inputs[1].value.length == 11) {bools[1] = true} else {bools[1] = false;}
            if (inputs[2].value.length >= 8) {bools[2] = true} else {bools[2] = false;}
            if (inputs[3].value == inputs[2].value && inputs[3].value != "") {bools[3] = true} else {bools[3] = false;}

            for (let e = 0; e < 4; e++) {
                if (bools[e] == false) {
                    proceed = bools[e];
                }
            }

            if (proceed == true) {
                i++
                for (let e = 0; e < 4; e++) {
                    inputs[e].className = "";
                    avisos[e].className = "disabled";
                }
                fieldsets[0].className += " disabled";
                fieldsets[1].className = "";
            } else {
                for (let e = 0; e < 4; e++) {
                    if (bools[e] == false) {
                        inputs[e].className += " errado";
                        avisos[e].className = "";
                    } else {
                        inputs[e].className = "";
                        avisos[e].className = "disabled";
                    }                         
                }
                for (let e = 0; e < 4; e++) {
                    inputs[e].value = "";               
                }
                document.querySelector(".errado").focus();
            }
            break;

        case 1:
            proceed = true;
            if (inputs[4].value != "") {bools[4] = true;} else {bools[4] = false;}
            if (inputs[5].checked == true || inputs[6].checked == true || inputs[7].checked == true) {bools[5] = true;} else {bools[5] = false;} 

            for (let e = 0; e < 6; e++) {
                if (bools[e] == false) {
                    proceed = bools[e];
                }
            }

            if (proceed == true) {
                for (let e = 0; e < 6; e++) {
                    inputs[e].className = "";
                    avisos[e].className = "disabled";
                }
                fieldsets[0].className += " disabled";
                fieldsets[1].className += " disabled";
                formbutton.className += " disabled";
                formbutton2.className = "";
                for (let e = 0; e < 5; e++) {
                    resultados[e] = document.createElement("p");
                    document.getElementById("respostas").appendChild(resultados[e]);
                }
                resultados[0].innerHTML = "Nome: " + inputs[0].value;
                resultados[1].innerHTML = "Cpf: " + inputs[1].value;
                resultados[2].innerHTML = "Senha: " + inputs[2].value;
                resultados[3].innerHTML = "Profissão: " + inputs[4].value;
                if (inputs[5].checked == true) {
                    resultados[4].innerHTML = "Estado: RS";
                } else if (inputs[6].checked == true) {
                    resultados[4].innerHTML = "Estado: SC";
                } else if (inputs[7].checked == true) {
                    resultados[4].innerHTML = "Estado: PR";
                }
            } else {
                for (let e = 0; e < 6; e++) {
                    if (bools[e] == false) {
                        inputs[e].className += " errado";
                        avisos[e].className = "";
                    } else {
                        inputs[e].className = "";
                        avisos[e].className = "disabled";
                    }                         
                }
                for (let e = 4; e < 5; e++) {
                    inputs[4].value = "";
                    inputs[5].checked = false;               
                    inputs[6].checked = false;               
                    inputs[7].checked = false;               
                }
                document.querySelector(".errado").focus();
            }
            break;
        default:
            break;
    }
}


