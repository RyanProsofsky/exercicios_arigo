// Crie um programa que armazene 10 números digitados pelo usuário em dois vetores um somente para números pares, e outro somente para números ímpares.
// Após, exiba os valores dos dois vetores na tela, em sequência.
// Obs.: As posições que não receberem valores exibirão o número zero. Não se preocupe com isso por enquanto.
let numerosPares = [] 
let numerosImpares = []

let numeros = [1,2,3,4,5,6,7,8,9,10]  



for (let cont = 0; cont < 10; cont++) {

    if(numeros[cont] % 2 == 0 ){
        numerosPares.push(numeros[cont])
    }else{
        numerosImpares.push(numeros[cont])
    }       
}

console.log(numerosPares)
console.log(numerosImpares)

