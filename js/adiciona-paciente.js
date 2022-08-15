var botaoEnviar = document.querySelector("#adicionar-paciente")
botaoEnviar.addEventListener("click",(event)=>{
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")
    var nome = form.nome.value;
    var peso = form.peso.value;  
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteNovo = document.querySelector("#tabela-pacientes")

    var pacienteTr = document.createElement("tr");

    var form = document.querySelector(".container");
    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");
    var tdImc = document.createElement("td");

    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;

    pacienteTr.appendChild(tdNome)
    pacienteTr.appendChild(tdPeso)
    pacienteTr.appendChild(tdAltura)
    pacienteTr.appendChild(tdGordura)
    pacienteTr.appendChild(tdImc)

    pacienteTr.classList.add("paciente")
    tdNome.classList.add("info-nome")
    tdPeso.classList.add("info-peso")
    tdAltura.classList.add("info-altura")
    tdGordura.classList.add("info-gordura")
    tdImc.classList.add("info-imc")

    pacienteNovo.appendChild(pacienteTr)
    console.log(tdNome)
    
})