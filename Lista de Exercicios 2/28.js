const prompt = require("prompt-sync")();

function calcularSomaAcimaAbaixoDiagonalPrincipal(matriz) {
    let somaAcimaDiagonal = 0;
    let somaAbaixoDiagonal = 0;

    // Calcular a soma dos elementos acima e abaixo da diagonal principal
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (j > i) {
                // Acima da diagonal principal
                somaAcimaDiagonal += matriz[i][j];
            } else if (i > j) {
                // Abaixo da diagonal principal
                somaAbaixoDiagonal += matriz[i][j];
            }
        }
    }

    return {
        somaAcimaDiagonal: somaAcimaDiagonal,
        somaAbaixoDiagonal: somaAbaixoDiagonal
    };
}

// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Matriz 10x10
let matriz = [];
for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        // Suponha que os números sejam fornecidos pelo usuário
        matriz[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}

// Calcular a soma dos elementos acima e abaixo da diagonal principal
let resultados = calcularSomaAcimaAbaixoDiagonalPrincipal(matriz);
let somaAcimaDiagonal = resultados.somaAcimaDiagonal;
let somaAbaixoDiagonal = resultados.somaAbaixoDiagonal;

// Imprimir a matriz e as somas calculadas
console.log("Matriz 10x10:");
imprimirMatriz(matriz);
console.log("\nSoma dos elementos acima da diagonal principal: " + somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal: " + somaAbaixoDiagonal);
