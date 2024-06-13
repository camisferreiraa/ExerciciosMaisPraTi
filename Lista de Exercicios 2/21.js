//Exercicio 21°
const prompt= require("prompt-sync")();

let altura = parseFloat(prompt("Digite a altura (em metros): "));
let sexo = prompt("Digite o sexo (masculino ou feminino): ");

function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;
  
    if (sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'm') {
      pesoIdeal = 72.7 * altura - 58;
    } else if (sexo.toLowerCase() === 'feminino' || sexo.toLowerCase() === 'f') {
      pesoIdeal = 62.1 * altura - 44.7;
    } else {
      throw new Error("Sexo inválido. Use 'masculino' ou 'feminino'.");
    }
  
    return pesoIdeal;
  }

  
try {
    let pesoIdeal = calcularPesoIdeal(altura, sexo);
    console.log(`O peso ideal para uma pessoa com altura de ${altura}m e sexo ${sexo} é ${pesoIdeal.toFixed(2)} kg.`);
  } catch (error) {
    console.log(error.message);
  }