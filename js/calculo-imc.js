var paciente = document.querySelectorAll(".paciente")
for(var i = 0; i<paciente.length;i++){
    pacientes = paciente[i]
    var altura = pacientes.querySelector(".info-altura").textContent;
    var peso = pacientes.querySelector(".info-peso").textContent;
    var imc = pacientes.querySelector(".info-imc")
    var verifica_altura = true;
    var verifica_peso = true;
    if(altura >= 3 ||altura<0){
        imc.textContent = "altura inválida"
        verifica_altura = false;
    }
    if(peso >= 300 || peso<=0){
        imc.textContent = "peso inválido"
        verifica_peso = false; 
    }
    if(verifica_altura==false || verifica_peso == false){
        pacientes.classList.add("paciente-invalido")
    }

    if(verifica_peso&&verifica_altura){
    imc.textContent = parseInt(peso)/(parseFloat(altura)*parseFloat(altura));
    imc.textContent = parseFloat(imc.textContent).toFixed(2)
    }
}