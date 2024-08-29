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
        "Jules Koundé"
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



for (const participante in participantes) {
    for (const jogador in jogadores) {
        let sorteio = jogadores[jogador][Math.floor(Math.random() * jogadores[jogador].length)]
        participantes[participante].push(sorteio)

        if(jogador == "ZG"){
            if (participantes[participantes].includes(jogadores[jogador])) {
                console.log("jogador existe")
            }
        }

        // if (participantes[participante].includes(jogadores[jogador])) {
        //     console.log("o jogador existe")
        // }
    }
    // console.log(participantes)
}

// console.log(participantes)