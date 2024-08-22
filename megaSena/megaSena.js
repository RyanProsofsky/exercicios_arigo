//Sortear 6 numeros de 1 a 60 sem repetir
//Primeiro verificar se tem número repetido, e depois delimitar para ter somente 6 números

let numeros = []

while(numeros.length < 6){
    const gerador = Math.floor(Math.random() * (60 - 1)) + 1

    if (numeros.includes(gerador)) {
        // console.log("numero repetido")
    } else {
        numeros.push(gerador)
    }
}

console.log(numeros)