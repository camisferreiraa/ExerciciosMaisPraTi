//Exercicio 08°

const prompt = require("prompt-sync")();

let totalHorasAtividade = parseInt(prompt("Quantas horas você tem de atividade física por mês? "));
let valorPonto = 0.05;
let PontosGanhos;

    if (totalHorasAtividade <= 10) {
        PontosGanhos = 2 * totalHorasAtividade
    } else if (totalHorasAtividade > 10 && totalHorasAtividade <= 20) {
        PontosGanhos = 5 * totalHorasAtividade
    } else {
        PontosGanhos = 10 * totalHorasAtividade
    }

    let calc = PontosGanhos * valorPonto;
   
console.log(`Sua pontuação : ${PontosGanhos} e o valor corresponde a ${calc} reais`);