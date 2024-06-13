//Exercicio 32°
function processMatrix(M) {
    
    function findMaxInRow(row) {
        return Math.max(...row.map(Math.abs));
    }

    
    let modifiedM = M.map(row => row.slice());

    
    for (let i = 0; i < 12; i++) {
        let maxInRow = findMaxInRow(M[i]);
        for (let j = 0; j < 13; j++) {
            modifiedM[i][j] /= maxInRow;
        }
    }

    
    console.log("Matriz Original:");
    M.forEach(row => console.log(row.join("\t")));

   
    console.log("\nMatriz Modificada:");
    modifiedM.forEach(row => console.log(row.join("\t")));
}


let M = Array.from({ length: 12 }, () => Array.from({ length: 13 }, () => Math.floor(Math.random() * 201) - 100));
processMatrix(M);
