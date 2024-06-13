/*Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/

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
   
console.log(`Sua pontuação é ${PontosGanhos} e o valor corresponde a ${calc} reais`);