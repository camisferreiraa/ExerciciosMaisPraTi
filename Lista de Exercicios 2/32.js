function processMatrix(M) {
    // Função para encontrar o maior valor em módulo em uma linha
    function findMaxInRow(row) {
        return Math.max(...row.map(Math.abs));
    }

    // Clonar a matriz M para não modificar a original diretamente
    let modifiedM = M.map(row => row.slice());

    // Iterar sobre cada linha da matriz
    for (let i = 0; i < 12; i++) {
        let maxInRow = findMaxInRow(M[i]);
        for (let j = 0; j < 13; j++) {
            modifiedM[i][j] /= maxInRow;
        }
    }

    // Exibir a matriz original
    console.log("Matriz Original:");
    M.forEach(row => console.log(row.join("\t")));

    // Exibir a matriz modificada
    console.log("\nMatriz Modificada:");
    modifiedM.forEach(row => console.log(row.join("\t")));
}

// Exemplo de uso da função
// Criar matriz M de exemplo (12x13) com valores aleatórios entre -100 e 100
let M = Array.from({ length: 12 }, () => Array.from({ length: 13 }, () => Math.floor(Math.random() * 201) - 100));

// Chamar a função com a matriz M
processMatrix(M);
