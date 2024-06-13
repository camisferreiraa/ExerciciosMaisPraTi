//Exercicio 31

// Função principal para contar valores e criar nova matriz
function processMatrix(A, V) {
    let countA = 0; // Contador de valores iguais a A
    let X = []; // Matriz para valores diferentes de A

    // Iterar sobre a matriz V
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (V[i][j] === A) {
                countA++;
            } else {
                X.push(V[i][j]);
            }
        }
    }

    // Exibir resultados
    console.log("Número de valores iguais a A:", countA);
    console.log("Matriz X (elementos diferentes de A):", X);
}

// Exemplo de uso da função
let A = 5;

// Criar matriz V de exemplo (30x30)
let V = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)));

// Chamar a função com A e V
processMatrix(A, V);
