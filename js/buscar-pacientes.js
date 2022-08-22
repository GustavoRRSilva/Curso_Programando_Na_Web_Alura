var botaoAdicionar = document.querySelector("#Buscar-pacientes")
botaoAdicionar.addEventListener("click",function(){
    
    var xhr = new XMLHttpRequest()
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes")
    var mensagem_erro = document.querySelector("#erro-ajax")
    xhr.addEventListener("load",()=>{
        if(xhr.status == 200){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function(paciente) {
            adicionaPacientesNaTabela(paciente)
            mensagem_erro.classList.add("invisivel")

        });
        }
        else{
            console.log(xhr.status + xhr.responseText)
         
            mensagem_erro.classList.remove("invisivel")
        }
    })
   
    xhr.send()
})