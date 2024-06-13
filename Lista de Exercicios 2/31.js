//Exercicio 31


function processMatrix(A, V) {
    let countA = 0; 
    let X = []; 


    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (V[i][j] === A) {
                countA++;
            } else {
                X.push(V[i][j]);
            }
        }
    }


    console.log("Número de valores iguais a A:", countA);
    console.log("Matriz X (elementos diferentes de A):", X);
}


let A = 5;

let V = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)));

processMatrix(A, V);
