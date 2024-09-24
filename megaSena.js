//Sortear 6 numeros de 1 a 60 sem repeti
//PrimEIRO verificar se tem número repetido, e depois delimitar se tem 6 números
let numeros = []

for (let index = 0; index < 6; index++) {
    let gerador = Math.floor(Math.random() * (60 - 1)) + 1

    // numeros[index] = gerador

    while (numeros.includes(gerador)) {
        numeros[index] = gerador

        break
    }

    console.log(numeros)
}



