//Exercicio 24°
function contarElementosNegativos(matriz) {
    let vetorC = [];
   
    for (let i = 0; i < matriz.length; i++) {
        let contador = 0;
        
        for (let j = 0; j < matriz[i].length; j++) {
           
            if (matriz[i][j] < 0) {
                contador++;
            }
        }
        vetorC.push(contador); 
    }
    return vetorC;
}


let matrizM = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, 3, -4, -5, 6, 7, -8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, 5, 6, 7, 8]
];


let vetorC = contarElementosNegativos(matrizM);


console.log("Vetor C contendo a quantidade de elementos negativos em cada linha:");
console.log(vetorC);
