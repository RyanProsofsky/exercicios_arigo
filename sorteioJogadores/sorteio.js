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
       
    ],

    "AT": [
        "Viktor Gyökeres",
        "Robert Lewandowski",
        "Niclas Füllkrug",
        "Paulo Dybala",
       
    ],

    "PD": [
        "Jack Grealish",
        "Leroy Sané",
        "Khvicha Kvaratskhelia"
        
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

// for (const jogador in jogadores) {
//     for (const participante in participantes) {
//         let sorteio = jogadores[jogador][Math.floor(Math.random() * jogadores[jogador].length)]
//         participantes[participante].push(sorteio)

        // if () {
            
        // }
    // }

  

        // if (participantes[participante].includes(jogadores.length)) {
        //     console.log("jogador repetidos")
        // }

        // if (jogadores[jogador]) {

        // }
    // }

// console.table(participantes)
// console.log(participantes)


// if (chave == "ZG") {
//     let sorteio = jogadores["ZG"][Math.floor(Math.random() * jogadores["ZG"].length)]

//     for (const teste in participantes) {
//         participantes[teste].push(sorteio)

//         if (participantes[teste].includes(jogadores.ZG)) {
//             console.log("nome repetido")
//         }

//     }
// }


// for (const teste in participantes) {
//     if (chave == "ZG") {
//         sorteio = jogadores["ZG"][Math.floor(Math.random() * jogadores["ZG"].length)]
//         participantes[teste].push(sorteio)

//         if (participantes[teste].includes(jogadores[chave])) {
//             console.log("nome repetido")
//         }
//     }
// }

console.table(jogadores)

console.log(jogadores[1])
