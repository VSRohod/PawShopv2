var catalogo = []
var carrinho = []
var valorTotal = 0
var id = 0;

class Produto {
    constructor(id, imgSrc, titulo, desc, valor) {
        this.id = id
        this.imgSrc = imgSrc
        this.titulo = titulo
        this.desc = desc
        this.valor = valor
    }
}

catalogo.push(new Produto(0,'../images/products/productImage.png','Coleira','A coleira é o acessório essencial para manter o seu companheiro de quatro patas seguro e com estilo. Feita com materiais de alta qualidade, nossa coleira é resistente e confortável para o seu cão. Com diversos designs e cores disponíveis, você pode encontrar a coleira perfeita que combina com a personalidade do seu peludo amigo. Além de proporcionar segurança durante os passeios, a coleira é uma expressão do amor e cuidado que você tem pelo seu cão.',100))
catalogo.push(new Produto(1,'../images/products/productImage2.png','Comida','lorem',20))
catalogo.push(new Produto(2,'../images/products/productImage3.png','Disco de brinquedo','lorem',120))
catalogo.push(new Produto(3,'../images/products/productImage4.png','Casinha','lorem',200))

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

function adicionarAoCarrinho(nomeProduto,valorProduto){
    document.getElementById('carrinhoLista').innerHTML = ``
    carrinho.push([nomeProduto,valorProduto])

    carrinho.forEach(cadaProduto => {
        document.getElementById('carrinhoLista').innerHTML += `
            <div class="container-fluid d-flex justify-content-between">
                <h6> ${cadaProduto[0]} </h6>
                <h6> R$ ${cadaProduto[1]} </h6>
            </div>
        `
    });

    valorTotal = valorTotal + valorProduto
    document.getElementById('valorTotal').innerHTML = `
        R$ ${valorTotal}
    `
}