// Exercicio 33

function processMatrix(M) {
    // Função para calcular a média dos elementos da diagonal secundária
    function calculateSecondaryDiagonalMean(matrix) {
        let sum = matrix[0][2] + matrix[1][1] + matrix[2][0];
        return sum / 3;
    }

    // Calcular a média da diagonal secundária
    let secondaryDiagonalMean = calculateSecondaryDiagonalMean(M);

    // Clonar a matriz M para não modificar a original diretamente
    let modifiedM = M.map(row => row.slice());

    // Multiplicar os elementos da diagonal principal pela média da diagonal secundária
    for (let i = 0; i < 3; i++) {
        modifiedM[i][i] *= secondaryDiagonalMean;
    }

    // Exibir a matriz original
    console.log("Matriz Original:");
    M.forEach(row => console.log(row.join("\t")));

    // Exibir a matriz modificada
    console.log("\nMatriz Modificada:");
    modifiedM.forEach(row => console.log(row.join("\t")));
}

let M = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


processMatrix(M);
