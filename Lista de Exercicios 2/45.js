//Exercicio 45°
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


let arrayDeStrings = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

let ocorrencias = contarOcorrencias(arrayDeStrings);


console.log(ocorrencias);
