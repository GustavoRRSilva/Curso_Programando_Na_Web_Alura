var paciente = document.querySelectorAll(".paciente")
for (var i = 0; i < paciente.length; i++) {
    pacientes = paciente[i]
    var altura = pacientes.querySelector(".info-altura").textContent;
    var peso = pacientes.querySelector(".info-peso").textContent;
    var imc = pacientes.querySelector(".info-imc")
    var verifica_peso = validaPeso(peso);
    var verifica_altura = validaAltura(altura);
    if (!verifica_altura) {
        imc.textContent = "altura inválida"
        verifica_altura = false;
    }
    if (!verifica_peso) {
        imc.textContent = "peso inválido"
        verifica_peso = false;
    }
    if (!verifica_altura || !verifica_peso) {
        pacientes.classList.add("paciente-invalido")
    }

    if (verifica_peso && verifica_altura) {
        imc.textContent = calculaImc(peso, altura)
    }
}
function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}