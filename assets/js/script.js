const botao = document.querySelector("#botaoTema")
botao.addEventListener("click",modo)


function modo(){
    let body = document.querySelector("body")
    let temaAtual = document.querySelector("#temaAtual")

    if(botao.checked){
        body.setAttribute("data-bs-theme","dark")
        temaAtual.innerHTML = "Escuro"
    }else{
        body.setAttribute("data-bs-theme","light")
        temaAtual.innerHTML = "Claro"
    }
}