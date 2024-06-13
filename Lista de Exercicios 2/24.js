function contarElementosNegativos(matriz) {
    let vetorC = [];
    // Loop para percorrer as linhas da matriz
    for (let i = 0; i < matriz.length; i++) {
        let contador = 0;
        // Loop para percorrer os elementos de cada linha
        for (let j = 0; j < matriz[i].length; j++) {
            // Se o elemento for negativo, incrementa o contador
            if (matriz[i][j] < 0) {
                contador++;
            }
        }
        vetorC.push(contador); // Adiciona o contador ao vetor C
    }
    return vetorC;
}

// Matriz M[1..6,1..8]
let matrizM = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, 3, -4, -5, 6, 7, -8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, 5, 6, 7, 8]
];

// Criar o vetor C
let vetorC = contarElementosNegativos(matrizM);

// Imprimir o vetor C
console.log("Vetor C contendo a quantidade de elementos negativos em cada linha:");
console.log(vetorC);
