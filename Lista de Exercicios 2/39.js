// Exercicio 39°
function compactVector(A) {
   
    let B = [];

    
    A.forEach(value => {
       
        if (value > 0) {
            B.push(value);
        }
    });


    return B;
}


let A = Array.from({ length: 100 }, () => Math.floor(Math.random() * 101) - 50);

let B = compactVector(A);


console.log("Vetor A:", A);


console.log("Vetor B compactado:", B);
