var botaoEnviar = document.querySelector("#adicionar-paciente")

botaoEnviar.addEventListener("click",(event)=>{
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")

    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTr = montaTr(paciente);

    form.reset();
})



function obtemPacienteDoFormulario(form){
    var pacientes = {
        nome : form.nome.value,
        peso : form.peso.value,  
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
    }
    return pacientes;
}
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
 
    var tabelaDePacientes = document.querySelector("#tabela-pacientes")
   
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-Gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc,"info-Imc"))


    tabelaDePacientes.appendChild(pacienteTr)

    return pacienteTr;
}


function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}