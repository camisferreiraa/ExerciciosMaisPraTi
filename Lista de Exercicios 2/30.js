const prompt = require("prompt-sync")();

function calcularSomasLinhasColunas(matriz) {
    let somasLinhas = [];
    let somasColunas = [];

    // Inicializar os vetores com zeros
    for (let i = 0; i < matriz.length; i++) {
        somasLinhas[i] = 0;
        somasColunas[i] = 0;
    }

    // Calcular as somas das linhas e das colunas
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somasLinhas[i] += matriz[i][j];
            somasColunas[j] += matriz[i][j];
        }
    }

    return {
        somasLinhas: somasLinhas,
        somasColunas: somasColunas
    };
}

// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Função para imprimir um vetor
function imprimirVetor(vetor) {
    console.log(vetor.join(" "));
}

// Matriz M(5,5)
let matrizM = [];
for (let i = 0; i < 5; i++) {
    matrizM[i] = [];
    for (let j = 0; j < 5; j++) {
        // Suponha que os números sejam fornecidos pelo usuário
        matrizM[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}

// Calcular as somas das linhas e das colunas
let resultados = calcularSomasLinhasColunas(matrizM);
let somasLinhas = resultados.somasLinhas;
let somasColunas = resultados.somasColunas;

// Imprimir a matriz, o vetor SL e o vetor SC
console.log("Matriz M(5,5):");
imprimirMatriz(matrizM);
console.log("\nVetor SL (Somas das Linhas):");
imprimirVetor(somasLinhas);
console.log("Vetor SC (Somas das Colunas):");
imprimirVetor(somasColunas);
