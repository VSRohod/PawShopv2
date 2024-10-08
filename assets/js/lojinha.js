var catalogo = []
var carrinho = []
var valorTotal = 0

class Produto {
    constructor(imgSrc, titulo, desc, valor) {
        this.imgSrc = imgSrc
        this.titulo = titulo
        this.desc = desc
        this.valor = valor
    }
}

class ProdutoCarrinho {
    constructor(titulo, valor) {
        this.titulo = titulo
        this.valor = valor
    }
}

catalogo.push(new Produto('../images/products/productImage.png','Coleira','A coleira é o acessório essencial para manter o seu companheiro de quatro patas seguro e com estilo. Feita com materiais de alta qualidade, nossa coleira é resistente e confortável para o seu cão. Com diversos designs e cores disponíveis, você pode encontrar a coleira perfeita que combina com a personalidade do seu peludo amigo. Além de proporcionar segurança durante os passeios, a coleira é uma expressão do amor e cuidado que você tem pelo seu cão.',100))
catalogo.push(new Produto('../images/products/productImage2.png','Comida','Ofereça ao seu cão a nutrição de que ele precisa com a nossa seleção de alimentos premium. Nossas opções de comida são formuladas com ingredientes de alta qualidade, proporcionando uma dieta equilibrada e saborosa. Temos uma variedade de rações secas, úmidas e até mesmo opções naturais e orgânicas para atender às necessidades alimentares do seu pet. Cuide da saúde do seu cão com o melhor em nutrição, garantindo que ele se sinta energizado e feliz todos os dias.',20))
catalogo.push(new Produto('../images/products/productImage3.png','Disco de brinquedo','Mantenha seu cão entretido e ativo com nosso disco de brinquedo, projetado para horas de diversão ao ar livre. Feito de materiais seguros e duráveis, o disco é perfeito para jogos de busca e interação com o seu cão. Seu design aerodinâmico permite lançamentos precisos, proporcionando ao seu peludo momentos de alegria e exercício. Leve-o para o parque ou o quintal e desfrute de momentos emocionantes e saudáveis com seu cão, fortalecendo ainda mais a conexão entre vocês.',120))
catalogo.push(new Produto('../images/products/productImage4.png','Casinha','Nossa casinha para cães é um verdadeiro lar dentro de casa. Feita com materiais duráveis e resistentes às intempéries, ela oferece um refúgio seguro e aconchegante para o seu pet. Com um design espaçoso e confortável, a casinha é o local perfeito para seu cão descansar, se abrigar do sol ou da chuva, e relaxar com todo o conforto que merece. Garanta que seu melhor amigo tenha um lugar aconchegante para chamar de seu com a nossa casinha de qualidade.',200))

function mostrarCatalogo() {
    catalogo.forEach(cadaProduto => {
        document.getElementById("catalogo").innerHTML += `
            <div class="card p-2 text-center" style="width: 20rem; border-radius: 0%;">
                <img style="border-radius: 0%;" src="${cadaProduto.imgSrc}" class="card-img-top" alt="Um cachorro usando coleira">
                <div class="card-body">
                    <h4 class="card-title" style="color: var(--laranja);">${cadaProduto.titulo}</h4>
                    <p class="card-text">${cadaProduto.desc}</p>
                    <h5 class="card-title" style="color: var(--verde);">R$ ${cadaProduto.valor}</h5>
                        <button onclick="adicionarAoCarrinho('${cadaProduto.titulo}',${cadaProduto.valor})" data-bs-toggle="offcanvas" data-bs-target="#carrinho" type="button" class="btn btn-primary">
                            COMPRAR
                        </button>
                </div>
            </div>
        `
    });
}

mostrarCatalogo()

// CARRINHO

function atualizarCarrinho(){
    document.getElementById('carrinhoLista').innerHTML = ``

    carrinho.forEach(cadaProduto => {
        document.getElementById('carrinhoLista').innerHTML += `
            <div class="container-fluid p-2 d-flex align-items-center border justify-content-between my-2">
                <h6 class="m-0"> ${cadaProduto.titulo} </h6>
                <h6 class="m-0"> R$ ${cadaProduto.valor} </h6>
                <button class="btn btn-danger" type="button"> X </button>
            </div>
        `
    });

    document.getElementById('valorTotal').innerHTML = `
        R$ ${valorTotal}
    `
}

function adicionarAoCarrinho(nomeProduto,valorProduto){
    carrinho.push(new ProdutoCarrinho(nomeProduto,valorProduto))

    valorTotal = valorTotal + valorProduto

    atualizarCarrinho()
}

function pagar(){
    localStorage.setItem('valorTotal',valorTotal)

    location.href = "http://127.0.0.1:5500/assets/pages/pagamento.html"
}