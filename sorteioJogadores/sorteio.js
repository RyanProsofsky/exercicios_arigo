// Sortear Times
// sortear 3 times, time para o Gilson, time para o joao e time para o Paulo.
// Cada time deve ter apenas 1 jogador em cada posição e obviamente sem repetir jogadores dentre os 3 times.
// formacao  1 4 3 3 
const participantes = {

    "gilson": [
        
    ],

    "joao": [


    ],

    "paulo": [


    ]
}

const jogadores = {
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
        "Alisson"
    ],

    "ZG": [
        "Micky Van de Ven",
        "Goncalo Inacio",
        "Jules Koundé",
        "Ben White",
        "Mats Hummels",
        "Jonathan Tah",
        "Ibrahima Konaté",
        "Pau Torres",
        "Josko Gvardiol",
        "Ruben Dias",
        "Lucas Hernandez",
        "Alphonso Davies",
        "Matthijs de Ligt",
        "Alessandro Bastoni",
        "Ronald Araujo",
        "John Stones",
        "Marquinhos",
        "Virgil Van Dijk",
        "William Saliba",
        "Antonio Rüdiger"
    ],

    "LD": [
        "Trent Alexander-Arnold",
        "Jeremie Frimpong",
        "Dani Carvajal",
        "Achraf Hakimi",
        "Kyle Walker"
    ],

    "LE": [
        "Ferland Mendy",
        "Theo Hernandez",
        "Alejandro Grimaldo",
        "Federico Dimarco",
        "Andy Robertson"
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
        "Kai Havertz",
        "Kevin De Bruyne",
        "Bruno Fernandes",
        "Pedri",
        "Aurelién Tchouaméni",
        "Florian Wirtz",
        "Declan Rice",
        "Toni Kroos",
        "Martin Ødegaard",
        "Jude Bellingham",
        "Rodri"
    ],

    "AT": [
        "Viktor Gyökeres",
        "Robert Lewandowski",
        "Niclas Füllkrug",
        "Paulo Dybala",
        "Dusan Vlahovic",
        "Victor Boniface",
        "Alexander Isak",
        "Ollie Watkins",
        "Cristiano Ronaldo",
        "Victor Osimhen",
        "Lautaro Martínez",
        "Cole Palmer",
        "Son Heung-Min",
        "Mohamed Salah",
        "Erling Haaland",
        "Harry Kane",
        "Kylian Mbappé"
    ],

    "PD": [
        "Jack Grealish",
        "Leroy Sané",
        "Khvicha Kvaratskhelia",
        "Luis Díaz",
        "Rodrygo",
        "Bukayo Saka",
        "Phil Foden"
    ],

    "PE": [
        "Christian Pulisic",
        "Ousmane Dembélé",
        "Rafael Leão",
        "Lionel Messi",
        "Vinícius Júnior",
        "Antoine Griezmann"
    ]
}

for (const chave in jogadores) {
    let sorteio = jogadores[chave][Math.floor(Math.random() * jogadores[chave].length)]
    // console.log("Chave" + chave)
    // console.log("Valor" + jogadores[chave])
    participantes["joao"].push(sorteio) 
}


// aqui esta sorteando o jogador(GO)


// console.log(Object.keys(jogadores))
// console.log(Object.values(jogadores))



// console.log(sorteio)
// participantes["joao"]

console.log(participantes["joao"])




//aqui os jogadores estão sendo puxado para o array "joao"
// participantes["joao"].push(jogadores)













