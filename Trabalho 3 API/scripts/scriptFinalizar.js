

let listCarrinho = `<ul id="listCarrinhoFinalizar">
    </ul>`
let divListCarrinho = document.getElementById("divListCarrinho")
divListCarrinho.innerHTML = listCarrinho;


mostrarCarrinho()

total = 0



function mostrarCarrinho() {
    let listCarrinho = document.getElementById("listCarrinhoFinalizar")
    listCarrinho.innerHTML = ``;
    
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
carrinho.forEach(element => {
    listCarrinho.innerHTML += `
        <li>
            <div class="itemCarrinhoList">
                <div class="imgAndName">
                    <img src="${element.img}" id="imgProduto" alt="">
                    <span id="nomeProduto">${element.title}</span>
                </div>
               
                <span style=" font-weight: 900">Preço: ${element.price}</span>
            </div>
        </li>
    `
});

console.log("Itens no carrinho:", carrinho);
}
mostrarCarrinho()


let totalDaCompraFinalizar = document.getElementById("valorTotal")
totalDaCompraFinalizar.innerText = localStorage.getItem("valorTotal")

