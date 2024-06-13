class Hotel {
    constructor(id, nome, cidade, quartosTotais) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.quartosTotais = quartosTotais;
        this.quartosDisponiveis = quartosTotais;
    }
}

class Reserva {
    constructor(idReserva, idHotel, nomeCliente) {
        this.idReserva = idReserva;
        this.idHotel = idHotel;
        this.nomeCliente = nomeCliente;
    }
}

class SistemaDeReservas {
    constructor() {
        this.hoteis = [];
        this.reservas = [];
        this.proximoIdHotel = 1;
        this.proximoIdReserva = 1;
    }

    adicionarHotel(nome, cidade, quartosTotais) {
        const novoHotel = new Hotel(this.proximoIdHotel++, nome, cidade, quartosTotais);
        this.hoteis.push(novoHotel);
        console.log(`Hotel ${nome} adicionado com sucesso!`);
    }

    buscarHoteisPorCidade(cidade) {
        const hoteisNaCidade = this.hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
        if (hoteisNaCidade.length > 0) {
            console.log(`Hotéis disponíveis em ${cidade}:`);
            hoteisNaCidade.forEach(hotel => {
                console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
            });
        } else {
            console.log(`Nenhum hotel encontrado em ${cidade}.`);
        }
    }

    fazerReserva(idHotel, nomeCliente) {
        const hotel = this.hoteis.find(h => h.id === idHotel);
        if (hotel && hotel.quartosDisponiveis > 0) {
            const novaReserva = new Reserva(this.proximoIdReserva++, idHotel, nomeCliente);
            this.reservas.push(novaReserva);
            hotel.quartosDisponiveis--;
            console.log(`Reserva feita com sucesso para o cliente ${nomeCliente} no hotel ${hotel.nome}.`);
        } else {
            console.log('Reserva não pode ser feita. Hotel não encontrado ou sem quartos disponíveis.');
        }
    }

    cancelarReserva(idReserva) {
        const indiceReserva = this.reservas.findIndex(r => r.idReserva === idReserva);
        if (indiceReserva !== -1) {
            const reservaCancelada = this.reservas[indiceReserva];
            this.reservas.splice(indiceReserva, 1);
            const hotel = this.hoteis.find(h => h.id === reservaCancelada.idHotel);
            hotel.quartosDisponiveis++;
            console.log(`Reserva ${idReserva} cancelada com sucesso.`);
        } else {
            console.log('Reserva não encontrada.');
        }
    }

    listarReservas() {
        if (this.reservas.length > 0) {
            console.log('Lista de reservas:');
            this.reservas.forEach(reserva => {
                const hotel = this.hoteis.find(h => h.id === reserva.idHotel);
                console.log(`ID Reserva: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
            });
        } else {
            console.log('Nenhuma reserva encontrada.');
        }
    }
}

// Exemplo de uso do sistema
const sistema = new SistemaDeReservas();

sistema.adicionarHotel('Hotel A', 'São Paulo', 10);
sistema.adicionarHotel('Hotel B', 'Rio de Janeiro', 5);

sistema.buscarHoteisPorCidade('São Paulo');

sistema.fazerReserva(1, 'João');
sistema.fazerReserva(1, 'Maria');

sistema.listarReservas();

sistema.cancelarReserva(1);

sistema.listarReservas();
