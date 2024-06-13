/*Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/
// Função principal
function listarNomesInverso() {
    // Vetor para armazenar os nomes
    var nomes = [];

    // Solicitar ao usuário que digite 7 nomes
    for (var i = 0; i < 7; i++) {
        var nome = prompt("Digite o nome da " + (i + 1) + "ª pessoa:");
        nomes.push(nome);
    }

    // Mostrar os nomes na ordem inversa
    console.log("Nomes informados (ordem inversa):");
    for (var i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i]);
    }
}

// Chamando a função principal
listarNomesInverso();
