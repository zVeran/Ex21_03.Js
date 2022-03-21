
let produtos = ["Calça", "Bermuda", "Saia", "Camiseta", "Meias"];

let tamanho = produtos.length;

document.write("<br>");

let i = 0;

/*for(i = 0; i<tamanho; i++){
    document.write(`${i+1} - ${produtos[i]} <br>`)
}
*/ 

/*while(i< tamanho){
    document.write(`${i+1} - ${produtos[i]} <br>`);
    i++;
}*/

function elementos(){
    i = 0; i<tamanho; i++;
}

tamanho.array.forEach(function(tamanho) {
    document.write(`${i+1} - ${produtos[i]} <br>`);
    i++;
    
});