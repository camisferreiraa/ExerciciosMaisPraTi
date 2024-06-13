// Exercicio 35

function processValues(values) {
    let evenArray = [];
    let oddArray = [];
    const MAX_SIZE = 5;

    values.forEach(value => {
        if (value % 2 === 0) {
            evenArray.push(value);
            if (evenArray.length === MAX_SIZE) {
                console.log("Vetor Par:", evenArray);
                evenArray = [];
            }
        } else {
            oddArray.push(value);
            if (oddArray.length === MAX_SIZE) {
                console.log("Vetor Ímpar:", oddArray);
                oddArray = [];
            }
        }
    });

    // Escrever qualquer conteúdo restante nos vetores
    if (evenArray.length > 0) {
        console.log("Vetor Par Restante:", evenArray);
    }
    if (oddArray.length > 0) {
        console.log("Vetor Ímpar Restante:", oddArray);
    }
}

// Exemplo de uso da função
// Criar um conjunto de 30 valores aleatórios entre 1 e 100
let values = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1);

// Chamar a função com os valores
processValues(values);