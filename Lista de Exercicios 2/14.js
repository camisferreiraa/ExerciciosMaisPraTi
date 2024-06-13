//Exercicio 14°
function listarNomesInverso() {

    var nomes = [];

  
    for (var i = 0; i < 7; i++) {
        var nome = prompt("Digite o nome da " + (i + 1) + "ª pessoa:");
        nomes.push(nome);
    }


    console.log("Nomes informados (ordem inversa):");
    for (var i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i]);
    }
}


listarNomesInverso();
