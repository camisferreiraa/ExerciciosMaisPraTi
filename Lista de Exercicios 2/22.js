const prompt = require("prompt-sync")();

function calcularEstatisticasPopulacao() {
    let somaSalario = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let countSalarioAte350 = 0;
    let totalPessoas = 0;

    // Loop para coletar dados de várias pessoas
    while (true) {
        let salario = parseFloat(prompt("Digite o salário da pessoa (em R$):"));
        if (isNaN(salario)) {
            break; // Se o usuário não digitar um número, encerra o loop
        }

        let numFilhos = parseInt(prompt("Digite o número de filhos da pessoa:"));

        // Atualiza as estatísticas
        somaSalario += salario;
        somaFilhos += numFilhos;
        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
        if (salario <= 350) {
            countSalarioAte350++;
        }
        
        totalPessoas++;
    }

    // Calcula as médias
    let mediaSalario = somaSalario / totalPessoas;
    let mediaFilhos = somaFilhos / totalPessoas;

    // Calcula o percentual de pessoas com salário até R$ 350,00
    let percentualSalarioAte350 = (countSalarioAte350 / totalPessoas) * 100;

    // Retorna as estatísticas
    return {
        mediaSalario: mediaSalario,
        mediaFilhos: mediaFilhos,
        maiorSalario: maiorSalario,
        percentualSalarioAte350: percentualSalarioAte350
    };
}

// Exemplo de uso da função
let estatisticas = calcularEstatisticasPopulacao();
console.log("Média de salário: R$" + estatisticas.mediaSalario.toFixed(2));
console.log("Média de filhos: " + estatisticas.mediaFilhos.toFixed(2));
console.log("Maior salário: R$" + estatisticas.maiorSalario.toFixed(2));
console.log("Percentual de pessoas com salário até R$ 350,00: " + estatisticas.percentualSalarioAte350.toFixed(2) + "%");

