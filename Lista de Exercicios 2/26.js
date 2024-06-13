//Exercicio 36°
const prompt = require("prompt-sync")();
function calcularProdutoMatricial(matrizA, matrizB) {
    
    if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
        console.log("Erro: As dimensões das matrizes não são compatíveis para multiplicação.");
        return;
    }

    let produto = [];

    
    for (let i = 0; i < matrizA.length; i++) {
        produto[i] = [];
        for (let j = 0; j < matrizA[0].length; j++) {
            produto[i][j] = 0;
        }
    }

   
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizA[0].length; j++) {
            for (let k = 0; k < matrizA.length; k++) {
                produto[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return produto;
}


function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}


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


let matrizProduto = calcularProdutoMatricial(matrizA, matrizB);


console.log("Matriz Produto P[1..3,1..5]:");
imprimirMatriz(matrizProduto);
