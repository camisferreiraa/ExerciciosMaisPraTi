const prompt = require("prompt-sync")();
 
let nomes = [];
let idades = [];


function lerDados() {
  for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`), 10);

    nomes.push(nome);
    idades.push(idade);
  }
}

function mostrarMenoresDeIdade() {
  console.log("Listagem de pessoas menores de idade:");
  for (let i = 0; i < nomes.length; i++) {
    if (idades[i] < 18) {
      console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
  }
}

lerDados();
mostrarMenoresDeIdade();
