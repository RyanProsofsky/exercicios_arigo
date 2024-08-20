//Sortear 6 numeros de 1 a 60 sem repetir.
let numeros = []

for (let index = 0; index < 6; index++) {
    let gerador = Math.floor(Math.random() * (60 - 1)) + 1



    if (numeros.includes(gerador)) {
        console.log("numero repetido")

        gerador
    }else {
        numeros[index] = gerador
    }
}

console.log(numeros)


















