
let totalDaCompra = document.getElementById("totalDaCompra")
totalDaCompra.textContent = total 
localStorage.setItem("valorTotal", total)

let listCarrinho = `<ul id="listCarrinho">
    </ul>`


let divListCarrinho = document.getElementById("divListCarrinho")
divListCarrinho.innerHTML = listCarrinho;

mostrarCarrinho()


function deletarItem(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho = carrinho.filter(item => item.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    mostrarCarrinho()
}



function mostrarCarrinho() {
    let listCarrinho = document.getElementById("listCarrinho")
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
                <div>
                
                <label for="">Qtd</label>
                <input type="number" min="0" class="form-control"  value="1" name="" oninput="qtdItem(${element.price}, value, ${element.id})" class="qtdItem">
                </div>
                <span style=" font-weight: 900">Preço: ${element.price}</span>
            </div>
        </li>
    `
});

console.log("Itens no carrinho:", carrinho);
}


 let qtdAnterior = 0;
const qtd = document.getElementsByClassName("qtdItem")

function qtdItem(element, valorInput, id) {
   console.log("id: "+id);
   console.log(valorInput);
   if (valorInput == 0) {
    total -= element
    deletarItem(id)
   }else{
    if (valorInput>qtdAnterior) {
        
        total += element
    }else {total -= element}
   }
    
    qtdAnterior = valorInput; 
console.log(total);
totalDaCompra.textContent = total 
localStorage.setItem("valorTotal", total)
}

