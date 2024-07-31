// analisar os produtos, trocar o CFOP 5933 pelo 5101
// somar os valores dos produtos
// somar os valores por CFOP

let somaProdutosTotal = 0
let cfops = []
let valoresCfops = []

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

    cfops[produtos[index][0]] = 1

    console.log("CFOP TABELA PRODUTOS",produtos[index][0])
    console.log("valores tabela nova: ",cfops[produtos[index][0]])

    if (cfops[produtos[index][0]] == cfops + 1 ) {
        console.log("deu certo")
    }
}

console.table(cfops)
console.table(produtos)

