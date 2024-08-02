// analisar os produtos, trocar o CFOP 5933 pelo 5101
// somar os valores dos produtos
// somar os valores por CFOP

let somaProdutosTotal = 0
let cfops = []

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

for (let index = 0; index < produtos.length; index++) {
    if (cfops[produtos[index][0]]) {
        cfops[produtos[index][0]] += produtos[index][1]
    } else {
        cfops[produtos[index][0]] = produtos[index][1]
    }
}

console.table(cfops)


