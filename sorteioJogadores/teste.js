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
    "Micky Van de Ven",
    "Goncalo Inacio",
    "Gabriel Magalhaes",
    "Ben White",
    "Mats Hummels",
    "Jonathan Tah",
    "Ibrahima Konaté",
    "Pau Torres",
    "Josko Gvardiol",
    "Ruben Dias",
    "Lucas Hernandez",
    "Matthijs de Ligt",
    "Alessandro Bastoni",
    "Ronald Araujo",
    "John Stones",
    "Marquinhos",
    "Virgil Van Dijk",
    "William Saliba",
    "Antonio Rüdiger",
    "Skrinnar",
    "Lisandro Martines",
    "Ake",
    "Sule",
    "Koulibaly",
    "Laporte",
    "Felix Torres",
    "Gustavo Gomes",
    "Andre Ramalho",
    "Militao",
    "Thiago Silva",
    "Kim"
  ],

  "LD": [
    "Trent Alexander-Arnold",
    "Jeremie Frimpong",
    "Dani Carvajal",
    "Achraf Hakimi",
    "Kyle Walker",
    "Jules Koundé",
    "Yan Kouto",
    "Ricardo Pereira",
    "Cancelo",
    "Reece James",
    "Pavard",
    "Molina",
    "Luke Shaw",
    "Tomiasu",
    "Trippier",
    "Mateuzin"
  ],

  "LE": [
    "Ferland Mendy",
    "Theo Hernandez",
    "Alejandro Grimaldo",
    "Federico Dimarco",
    "Andy Robertson",
    "Alphonso Davies",
    "Tagliafico",
    "Gosens",
    "Malacia",
    "Arana",
    "Cucurela",
    "Vina",
    "Piquerez",
    "Zinchenko",
    "Wan Bissaka",
    "Ben Chiwell",
    "Ben White"
  ],

  "MC": [
    "James Maddison",
    "Julian Brandt",
    "Warren Zaire-Emery",
    "Enzo Fernández",
    "Federico Valverde",
    "Lucas Paquetá",
    "Granit Xhaka",
    "João Palhinha",
    "Bernardo Silva",
    "Gavi",
    "Hakan Calhanoglu",
    "Eduardo Camavinga",
    "Alexis Mac Allister",
    "Bruno Guimarães",
    "Xavi Simons",
    "Joshua Kimmich",
    "Frenkie de Jong",
    "Nicolo Barella",
    "Jamal Musiala",
    "Elliot",
    "Kevin De Bruyne",
    "Bruno Fernandes",
    "Pedri",
    "Aurelién Tchouaméni",
    "Florian Wirtz",
    "Declan Rice",
    "Toni Kroos",
    "Martin Ødegaard",
    "Jude Bellingham",
    "Rodri",
    "De Paul",
    "Maino",
    "Neymar",
    "Barella",
    "Kalvin Philips",
    "Gallagher",
    "Messi",
    "Luis Alberto",
    "Garro",
    "Tilemans",
    "Musiala",
    "Arda Guller",
    "Vitinha",
    "Palmer",
    "Arrascaeta",
    "Sabitzer",
    "Joelinton",
    "Tonali",
    "De La Cruz",
    "Rafael Veiga",
    "Thomas Partey",
    "Dani Olmo",
    "Gravenbech",
    "Caicedo",
    "Casemiro",
    "Kante"
  ],

  "AT": [
    "Viktor Gyökeres",
    "Robert Lewandowski",
    "Niclas Füllkrug",
    "Dusan Vlahovic",
    "Victor Boniface",
    "Alexander Isak",
    "Ollie Watkins",
    "Cristiano Ronaldo",
    "Victor Osimhen",
    "Lautaro Martínez",
    "Antoine Griezmann",
    "João Felix",
    "Endrik",
    "Erling Haaland",
    "Harry Kane",
    "Vegetti",
    "Ilicit",
    "Shik",
    "Darvin Nunes",
    "Bouwen",
    "Gakpo",
    "Jota",
    "Imobbile",
    "Lukaku",
    "Haller",
    "Firmino",
    "Gabriel Jesus",
    "Julian Alvarez",
    "Kai Havertz",
    "Nkuku",
    "Zaha",
    "Calvert Lewin",
    "Kylian Mbappé"
  ],

  "PD": [
    "Mohamed Salah",
    "Leroy Sané",
    "Rodrygo",
    "Bukayo Saka",
    "Phil Foden",
    "Lamin Yamal",
    "Raphinha",
    "Dembele",
    "Saka",
    "Luiz Henrique",
    "Coman",
    "Nhac Willians",
    "Mahrez",
    "Di Maria",
    "Ziech",
    "Paulo Dybala",
    "Aspas",
    "Savinho",
    "LLorente",
    "Almiron",
    "Sancho"
  ],

  "PE": [
    "Khvicha Kvaratskhelia",
    "Michael",
    "Dybala",
    "Troussard",
    "Gabriel Martinelli",
    "Luis Díaz",
    "Jack Grealish",
    "Son Heung-Min",
    "Christian Pulisic",
    "Ousmane Dembélé",
    "Rafael Leão",
    "Nico Willians",
    "Gnabry",
    "Fosberg",
    "Chiesa",
    "Mane",
    "Vinícius Júnior",
    "Rashford",
    "Ansu Fati",
    "Sterling",
    "Mudrik",
    "Barnes",
    "Gordon",
    "Doku"
  ]
}

const jogadoresRepetidos = []
//USAR UMA VARIAVEL PARA ARMAZENAR AS POSICOES
let pozicoes = Object.keys(posicoes)
let teste = posicoes["GO"]

for (const participante in participantes) {
  for (const posicao in posicoes) {

    //ESSE WHILE SERVE ESTA PERCORRENDO O BLOCO DE CODIGO 11 VEZES
    while (participantes[participante].length <= 11) {
      const jogador = posicoes[posicao][Math.floor(Math.random() * posicoes[posicao].length)]
      if (jogadoresRepetidos.includes(jogador)) {
        console.log("jogador repetido", jogador)
      } else {
        participantes[participante].push(jogador)
        jogadoresRepetidos.push(jogador)
      }

      while (posicoes[posicao] == teste) {

        jogadoresRepetidos.push(jogador)
        
      }
    }
  }
}

