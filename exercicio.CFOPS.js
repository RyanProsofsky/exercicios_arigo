// analisar os produtos, trocar o CFOP 5933 pelo 5101
// somar os valores dos produtos
// somar os valores por CFOP

let somaProdutosTotal = 0
// let somaProdutoCfop5101 = 0
// let somaProdutoCfop5102 = 0
// let somaProdutoCfop5405 = 0
let cfops = []
let valoresCfops = []

// teste[i] = 10
// teste[i] = 5
// console.log(teste)

// cfops[5102] = 154.22

// console.log(cfops)

let produtos = [
    //CFOP, Valor
    [5102, 154.22],
    [5933, 987.85],
    [5405, 530.00],
    [5102, 164.22],
    [5933, 290.30],
    [5933, 78.85],
    [5102, 786.54],
    [5102, 424.45],
    [5405, 6545.88]
]


for (let index = 0; index < produtos.length; index++) {
    if (produtos[index][0] == 5933) {
        produtos[index][0] = 5101
    }
    somaProdutosTotal = somaProdutosTotal + produtos[index][1]
}

// console.log(cfops[produtos[0][0]])

for (let index = 0; index < produtos.length; index++) {
    cfops[produtos[index][0]]
}
console.table(cfops)


// if (produtos[index][0] == 5101) {
//     somaProdutoCfop5101 = somaProdutoCfop5101 + produtos[index][1]
// } if (produtos[index][0] == 5102) {
//     somaProdutoCfop5102 = somaProdutoCfop5102 + produtos[index][1]
// } if (produtos[index][0] == 5405){
//     somaProdutoCfop5405 = somaProdutoCfop5405 + produtos[index][1]
// }

