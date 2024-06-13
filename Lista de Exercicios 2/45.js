function contarOcorrencias(array) {
    let contador = {};

    array.forEach(str => {
        if (contador[str]) {
            contador[str]++;
        } else {
            contador[str] = 1;
        }
    });

    return contador;
}

// Exemplo de uso
let arrayDeStrings = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

let ocorrencias = contarOcorrencias(arrayDeStrings);

// Imprimir o objeto com as ocorrências
console.log(ocorrencias);
