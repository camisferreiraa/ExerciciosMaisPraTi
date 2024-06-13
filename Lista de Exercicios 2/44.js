//Exercicio 44°
function contarStrings(obj) {
    let contador = 0;

    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            contador++;
        }
    }

    return contador;
}

// Exemplo de uso
let exemploObjeto = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo",
    email: "ana@example.com",
    telefone: "1234-5678",
    ativo: true,
    notas: [10, 9, 8],
};

let numeroDeStrings = contarStrings(exemploObjeto);
console.log("Número de propriedades do tipo string:", numeroDeStrings);
