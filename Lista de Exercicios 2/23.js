function criarMatrizIdentidade(tamanho) {
    let matriz = [];
    // Loop para criar a matriz com o tamanho especificado
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = []; // Cria uma nova linha da matriz
        for (let j = 0; j < tamanho; j++) {
            // Define os elementos da diagonal principal como 1 e os demais como 0
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
    // Loop para imprimir a matriz
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Criar e imprimir a matriz identidade MI[1..7,1..7]
let tamanho = 7; // Tamanho da matriz
let matrizIdentidade = criarMatrizIdentidade(tamanho);
console.log("Matriz Identidade MI[1..7,1..7]:");
imprimirMatriz(matrizIdentidade);

