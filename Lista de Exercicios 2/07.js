
const prompt = require("prompt-sync")();


let car = prompt("Qual tipo de carro, digite 'P' para Popular, e 'L' para Luxo:").toUpperCase();
while (carro != "P" && car != "L") {
    console.log("Opção inválida!");
    car = prompt("Digite novamente: ");
}
let diasAlugado = Number(prompt("Quantos dias foi alugado?"));
let kmPercorrido = Number(prompt("Quanto Km foram percorridos?"));
if (car == "P"){
    if (kmPercorrido <=  100) {
        let valorKM = kmPercorrido * 0.2;
    } else {
        let valorKM = (100 + ((kmPercorrido - 100) * 0.1))
    }
    let valorDias = diasAlugado * 90;
    console.log(`O total a pagar é R$ ${valorDias + valorKM}`);
} else {
    if (kmPercorrido <=  200) {
        let valorKM = kmPercorrido * 0.3;
    } else {
        let valorKM = (200 + ((kmPercorrido - 200) / 2));
    }
    let valorDias = (diasAlugado - 1) * 150 + 90;
    
}

console.log(`O total a pagar é R$ ${valorDias} ${valorKM}`);