/*Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o somatório desses números na tela. Após exibir a soma, o programa deve mostrar também os números que o usuário digitou, um por linha*/
const prompt = require('prompt-sync')();

const numeros = [2,4,6,7,8]
let soma = 0 


for (let cont = 0; cont < numeros.length; cont++) {

    //aqui esta somando os numeros
    soma = soma + numeros[cont]
    //igual o de cima
    // soma += numeros[cont]
}

console.log(soma)

for (let cont = 0; cont < numeros.length; cont++) {
     //aqui está exibindo um numero por linha!!!
    console.log(numeros[cont])
}









