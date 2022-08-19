var botaoEnviar = document.querySelector("#adicionar-paciente")

botaoEnviar.addEventListener("click", (event) => {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);
    var pacienteTr = montaTr(paciente);
    console.log(erros)
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = " ";
    var tabelaDePacientes = document.querySelector("#tabela-pacientes")
    tabelaDePacientes.appendChild(pacienteTr)
    form.reset();
})



function obtemPacienteDoFormulario(form) {
    var pacientes = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return pacientes;
}
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-Gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-Imc"))
    return pacienteTr;
}


function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}

function validaPaciente(paciente) {

    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("Nome Vazio")
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é invalido")
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é invalida")
    }
    if (paciente.gordura.length == 0) {
        erros.push("Gordura em branco")
    }
    if (paciente.peso.length == 0) {
        erros.push("Peso em branco")
    }
    if (paciente.altura.length == 0) {
        erros.push("Altura em branco")
    }
    return erros;
}
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = " ";
    erros.forEach((erro) => {
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)
    });
}