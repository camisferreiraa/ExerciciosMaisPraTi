// Exercicio 34°
function processMatrix(M) {
   
    for (let i = 0; i < 50; i++) {
        let diagonalElement = M[i][i];
        for (let j = 0; j < 50; j++) {
            M[i][j] *= diagonalElement;
        }
    }

    console.log("Matriz Modificada:");
    M.forEach(row => console.log(row.join("\t")));
}

let M = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => Math.random() * 10));


processMatrix(M);
