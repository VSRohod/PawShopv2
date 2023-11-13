// addEventListener = adicionar um "ouvidor" de eventos
const botao = document.querySelector("#botaoTema")
botao.addEventListener("click",modo)


function modo(){
    // document = html
    // querySelector = selecionar elementos
    let body = document.querySelector("body")
    let temaAtual = document.querySelector("#temaAtual")

    if(botao.checked){
        // setAtribute(atributo,valor)
        body.setAttribute("data-bs-theme","dark")
        temaAtual.innerHTML = "Escuro"
    }else{
        body.setAttribute("data-bs-theme","light")
        temaAtual.innerHTML = "Claro"
    }
}