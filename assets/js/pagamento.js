var carrinho = []
var valorTotal = 0

window.addEventListener('load', () => {
    valorTotal = localStorage.getItem('valorTotal')

    if(valorTotal == null){
        document.querySelector("main").innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center" style="height: 85vh ;">
            <h1> Oh não! Algo com o carrinho de compras deu errado! Por favor tente novamente! </h1>
            <a href="../../index.html" class="btn btn-danger" > VOLTAR </a>
        </div>
        `
    }

    document.querySelector("#valorTotal").innerHTML = `
       <h6 class="text-success"> R$ ${valorTotal} </h6>
    `

})


function finalizarCompra(){
    localStorage.removeItem('valorTotal')
}
