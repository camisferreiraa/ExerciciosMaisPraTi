const prompt = require("prompt-sync")();

function multiplicarMatrizPorA(matriz, valorA) {
    let vetorV = [];
    let k = 0;

    // Loop para percorrer a matriz
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            // Multiplica cada elemento da matriz pelo valor A e armazena no vetor V
            vetorV[k] = matriz[i][j] * valorA;
            k++;
        }
    }

    return vetorV;
}

// Função para imprimir um vetor
function imprimirVetor(vetor) {
    console.log(vetor.join(" "));
}

// Matriz M(6,6)
let matrizM = [];
for (let i = 0; i < 6; i++) {
    matrizM[i] = [];
    for (let j = 0; j < 6; j++) {
        // Suponha que os números sejam fornecidos pelo usuário
        matrizM[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}

// Valor A
let valorA = parseFloat(prompt("Digite o valor de A:"));

// Multiplicar a matriz M pelo valor A
let vetorV = multiplicarMatrizPorA(matrizM, valorA);

// Imprimir o vetor V
console.log("Vetor V(36) com os elementos da matriz M multiplicados por A:");
imprimirVetor(vetorV);
