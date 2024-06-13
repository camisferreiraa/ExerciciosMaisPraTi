const prompt = require("prompt-sync")();
function calcularSomaColunas(matriz) {
    let somaColunas = [];

    // Inicializa o vetor somaColunas com zeros
    for (let j = 0; j < matriz[0].length; j++) {
        somaColunas[j] = 0;
    }

    // Loop para percorrer as colunas
    for (let j = 0; j < matriz[0].length; j++) {
        // Loop para percorrer as linhas e somar os elementos da coluna atual
        for (let i = 0; i < matriz.length; i++) {
            somaColunas[j] += matriz[i][j];
        }
    }

    return somaColunas;
}

// Função para imprimir um vetor
function imprimirVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log("Soma da coluna " + (i + 1) + ": " + vetor[i]);
    }
}

// Matriz de números reais 15x20
let matriz = [];
for (let i = 0; i < 2; i++) {
    matriz[i] = [];
    for (let j = 0; j < 2; j++) {
        // Suponha que os números sejam fornecidos pelo usuário
        matriz[i][j] = parseFloat(prompt("Digite o número da posição [" + (i + 1) + "][" + (j + 1) + "]:"));
    }
}

// Calcular a soma de cada coluna
let somaColunas = calcularSomaColunas(matriz);

// Imprimir a soma de cada coluna
console.log("Soma de cada coluna separadamente:");
imprimirVetor(somaColunas);
