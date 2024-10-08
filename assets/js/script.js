
window.addEventListener('load', () => {
    var temaEscolhido = localStorage.getItem('tema')

    if(temaEscolhido == null){
        localStorage.setItem('tema','light')
    }

    if(localStorage.getItem('tema') == "dark"){
        document.querySelector("#botaoTema").checked = true
        document.querySelector("#temaAtual").innerHTML = `Escuro`
    }else{
        document.querySelector("#botaoTema").checked = false
        document.querySelector("#temaAtual").innerHTML = `Claro`
    }

    document.querySelector("body").setAttribute('data-bs-theme',localStorage.getItem('tema'))
})

const botao = document.querySelector("#botaoTema")
botao.addEventListener("click",modo)

function modo(){

    if(botao.checked){
        localStorage.setItem('tema','dark')
        document.querySelector("#botaoTema").checked = true
        document.querySelector("#temaAtual").innerHTML = `Escuro`
        document.querySelector("body").setAttribute('data-bs-theme','dark')

    }else{
        localStorage.setItem('tema','light')
        document.querySelector("#botaoTema").checked = false
        document.querySelector("#temaAtual").innerHTML = `Claro`
        document.querySelector("body").setAttribute('data-bs-theme','light')

    }
}