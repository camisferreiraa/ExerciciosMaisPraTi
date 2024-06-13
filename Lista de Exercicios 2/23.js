//Exercicio 23°
function criarMatrizIdentidade(tamanho) {
    let matriz = [];
    
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = []; 
        for (let j = 0; j < tamanho; j++) {
           
            if (i === j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }
    return matriz;
}

function imprimirMatriz(matriz) {
  
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}


let tamanho = 7; 
let matrizIdentidade = criarMatrizIdentidade(tamanho);
console.log("Matriz Identidade MI[1..7,1..7]:");
imprimirMatriz(matrizIdentidade);

