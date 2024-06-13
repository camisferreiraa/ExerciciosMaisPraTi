const prompt = require("prompt-sync")();
function calcularProdutoMatricial(matrizA, matrizB) {
    // Verificar se as dimensões das matrizes são compatíveis para multiplicação
    if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
        console.log("Erro: As dimensões das matrizes não são compatíveis para multiplicação.");
        return;
    }

    let produto = [];

    // Inicializar a matriz produto com zeros
    for (let i = 0; i < matrizA.length; i++) {
        produto[i] = [];
        for (let j = 0; j < matrizA[0].length; j++) {
            produto[i][j] = 0;
        }
    }

    // Calcular o produto matricial
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizA[0].length; j++) {
            for (let k = 0; k < matrizA.length; k++) {
                produto[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return produto;
}

// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Matrizes A e B (3x5)
let matrizA = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

let matrizB = [
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
];

// Calcular o produto matricial
let matrizProduto = calcularProdutoMatricial(matrizA, matrizB);

// Imprimir a matriz produto
console.log("Matriz Produto P[1..3,1..5]:");
imprimirMatriz(matrizProduto);
