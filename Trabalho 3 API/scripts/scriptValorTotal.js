
let total = 0;

atualizarTotal()

function atualizarTotal() {

   let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
   carrinho.forEach(element => {
       total += element.price
   });  

}