//Exercicio 05°

/*Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/
const prompt = require("prompt-sync")();

const escolhaDoJogador = prompt("Escreva sua jogada:");
const opcoes = ['pedra', 'papel', 'tesoura'];
const escolhaDoComputador = opcoes[Math.floor(Math.random() * 3)];
const resultado = verificarResultado(escolhaDoJogador, escolhaDoComputador);

  function verificarResultado(jogador, computador) {
    if (jogador === computador) {
      return 'Empate';
    } else if (
      (jogador === 'pedra' && computador === 'tesoura') ||
      (jogador === 'papel' && computador === 'pedra') ||
      (jogador === 'tesoura' && computador === 'papel')
    ) {
      return 'Você ganhou!';
    } else {
      return 'Você perdeu!';
    }
  }
  console.log(verificarResultado())

