
// Adicionar os itens LI à lista

atulizarNumeroDeItemsNoCarrinho()
function atulizarNumeroDeItemsNoCarrinho(params) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let numItems = document.getElementById("numItems");
numItems.textContent = carrinho.length
}


function addCarrinho(id,title,price, img) {
    let numItems = document.getElementById("numItems")
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let btnAdcionarCarrinho = document.getElementById("btnAdd"+id);
    console.log(btnAdcionarCarrinho);
    
    btnAdcionarCarrinho.innerText = "Adicionado"
    btnAdcionarCarrinho.disabled = true
    // Adiciona o novo item ao carrinho
    carrinho.push({ id: id, title: title, price: price, img:img });
    
    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

 
    atulizarNumeroDeItemsNoCarrinho()
}




const mostrarDadosDaApi = () =>{
    let ingredients;
    let main =  document.getElementById("root");
    // Criar a lista UL
    const ul = `<ul  id="listUl" ></ul>`
    main.innerHTML = ul;
    let lista = document.getElementById("listUl");
    buscarDadosApi().then((res)=>{
       

        res.forEach(e => {
let data =JSON.stringify(e);

            let ulIngredients =`<ul style="display:flex; flex-direction:column">`;
      
            e.ingredients.forEach(element => {
                ulIngredients += `<li id="ingredientsItems">${element}</li>`
    })

           lista.innerHTML += `<li>
           <div class="card">
            
           <img src="${e.image}"></img>
            <div class="dataCoffe">
            <span>Nome: ${e.title}</span>
            <span>Preço: ${e.price}</span>
            <p>Descrição: ${e.description}</p>
            <span style="font-weight: boldfont-weight: bold">Ingredientes:</span>
            
            ${ulIngredients}
            </ul>

           </div>
           <button class="btnAdcionarCarrinho" id="btnAdd${e.id}" onClick="addCarrinho(${e.id},'${e.title}',${e.price},'${e.image}')">Adicionar ao carrinho</button>
           </div>
           </li>`
           
        });
        
})



}



mostrarDadosDaApi()

 
