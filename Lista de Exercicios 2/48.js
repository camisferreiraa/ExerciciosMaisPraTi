//Exercicio 48°
function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioCombinado = {};

   
    for (let itemA in inventarioLojaA) {
        inventarioCombinado[itemA] = inventarioLojaA[itemA];
    }

  
    for (let itemB in inventarioLojaB) {
        if (inventarioCombinado[itemB]) {
            inventarioCombinado[itemB] += inventarioLojaB[itemB];
        } else {
            inventarioCombinado[itemB] = inventarioLojaB[itemB];
        }
    }

    return inventarioCombinado;
}

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


console.log(inventarioCombinado);
