// Exercicio 34.js
function processMatrix(M) {
    // Multiplicar cada linha pelo elemento da diagonal principal daquela linha
    for (let i = 0; i < 50; i++) {
        let diagonalElement = M[i][i];
        for (let j = 0; j < 50; j++) {
            M[i][j] *= diagonalElement;
        }
    }

    // Exibir a matriz modificada
    console.log("Matriz Modificada:");
    M.forEach(row => console.log(row.join("\t")));
}

// Exemplo de uso da função
// Criar matriz M de exemplo (50x50) com valores aleatórios entre 0 e 10
let M = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => Math.random() * 10));

// Chamar a função com a matriz M
processMatrix(M);
