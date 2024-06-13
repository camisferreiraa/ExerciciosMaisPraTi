function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioCombinado = {};

    // Adiciona inventário da loja A ao inventário combinado
    for (let itemA in inventarioLojaA) {
        inventarioCombinado[itemA] = inventarioLojaA[itemA];
    }

    // Adiciona inventário da loja B ao inventário combinado ou soma quantidades se o item já existir
    for (let itemB in inventarioLojaB) {
        if (inventarioCombinado[itemB]) {
            inventarioCombinado[itemB] += inventarioLojaB[itemB];
        } else {
            inventarioCombinado[itemB] = inventarioLojaB[itemB];
        }
    }

    return inventarioCombinado;
}

// Exemplo de uso
const inventarioLojaA = {
    "maçã": 10,
    "banana": 5,
    "laranja": 15
};

const inventarioLojaB = {
    "banana": 8,
    "uva": 20,
    "abacaxi": 12
};

const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);

// Imprime o inventário combinado
console.log(inventarioCombinado);
