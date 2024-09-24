//Sortear 6 numeros de 1 a 60 sem repetir

//Primeiro verificar se tem número repetido, e depois delimitar para ter somente 6 números
let numeros = []
let gerador


for (let i = 0; i < 6; i++) {
    gerador = Math.floor(Math.random() * (60 - 1)) + 1

    if (numeros.includes(gerador)) {
       console.log("numero repetido")
    }else{
        numeros[i] = gerador
    }

//     while (numeros.length < 6) {
        

//         break
//     }
}


console.log(numeros)









