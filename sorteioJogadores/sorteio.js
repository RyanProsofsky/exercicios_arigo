const participantes = {
  "gilson": [

  ],

  "Paulo": [

  ],

  "Joao": [

  ]
}

const posicoes = {
  "GO": [
    "Gianluigi Donnarumma",
    "Lukas Hradecky",
    "Yann Sommer",
    "Mike Maignan",
    "Manuel Neuer",
    "Marc-Andre ter Stegen",
    "Jan Oblak",
    "Ederson",
    "Emiliano Dibu Martinez",
    "Alisson",
    "Cortois",
    "Onana",
    "Bento",
    "Bono",
    "Cassio",
  ],

  "ZG": [
    "Sergio Ramos",
    "Virgil van Dijk",
    "Thiago Silva",
    "Raphaël Varane",
    "Kalidou Koulibaly",
    "Gustavo Gomez",
    "Murilo"
  ],

  "LD": [
    "Dani Alves",
    "Trent Alexander-Arnold",
    "João Cancelo",
    "Kyle Walker",
    "Achraf Hakimi",
    "Marco Rocha",
    "Arana"
  ],

  "LE": [
    "Jordi Alba",
    "Andrew Robertson",
    "Theo Hernández",
    "Ferland Mendy",
    "Alphonso Davies",
    "Piquerez",
    "Victor Luis"
  ],

  "MC": [
    "James Maddison",
    "Julian Brandt",
    "Warren Zaire-Emery",
    "Enzo Fernández",
    "Federico Valverde",
    "Casemiro",
    "Raphael Peiga"
  ],

  "AT": [
    "Robert Lewandowski",
    "Erling Haaland",
    "Karim Benzema",
    "Romelu Lukaku",
    "Rony",
    "Cristiano Ronaldo",
    "Flaco Lopez"
  ],

  "PD": [
    "Mohamed Salah",
    "Lionel Messi",
    "Riyad Mahrez",
    "Jadon Sancho",
    "Dudu",
    "Keno",
    "Gabigol"
  ],

  "PE": [
    "Neymar Jr.",
    "Kylian Mbappé",
    "Sadio Mané",
    "Vinícius Jr.",
    "Marcus Rashford",
    "Son Heung-min",
    "Bruno Henrique"
  ]
}

const jogadoresRepetidos = []

let jogador
let cont = 1;
// let GO = posicoes["GO"]

//usar uma variavel para armazenar as posicoes 

for (const participante in participantes) {
  for (const posicao in posicoes) {
    // while (participantes[participante].length <= 11) {
      jogador = posicoes[posicao][Math.floor(Math.random() * posicoes[posicao].length)]
      console.log(participante)
  
      if (jogadoresRepetidos.includes(jogador)) {
        console.log("loop infinito")
      } else {
        participantes[participante].push(jogador)
        jogadoresRepetidos.push(jogador)
      }
    }
    // jogador = 0
    // cont = 0
  }
// }



