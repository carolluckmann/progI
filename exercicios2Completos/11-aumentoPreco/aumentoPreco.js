//Recebe o preço do produto e calcula o aumento do preço, baseado no seguinte critério:
//- até 280 (inclusive): aumento de 20%
//- até 700 (inclusive): aumento de 15%
//- até 1500 (inclusive): aumento de 10%
//- acima de 1500: aumento de 5%
//Informe: o preço atual, o percentual de aumento, o valor do aumento e o novo preço, todos com duas casas decimais.
let preco = parseInt (prompt(`Insira o preço do produto (em R$):`))


let aumento1 = (preco * 20) / 100
let aumento2 = (preco * 15) / 100
let aumento3 = (preco * 10) / 100
let aumento4 = (preco * 5) / 100

let novoPreco1 = preco + aumento1
let novoPreco2 = preco + aumento2
let novoPreco3 = preco + aumento3
let novoPreco4 = preco + aumento4

if (preco <= 280) {
    alert (`Preço atual: R$${preco.toFixed(2)}
Percentual de aumento: 20% 
Valor do aumento: R$${aumento1.toFixed(2)}
Novo preço: R$${novoPreco1.toFixed(2)}`)
}
else if (preco <= 700) {
    alert (`Preço atual: R$${preco.toFixed(2)}
Percentual de aumento: 15% 
Valor do aumento: R$${aumento2.toFixed(2)}
Novo preço: R$${novoPreco2.toFixed(2)}`)
}
else if (preco <= 1500) {
    alert (`Preço atual: R$${preco.toFixed(2)}
Percentual de aumento: 10% 
Valor do aumento: R$${aumento3.toFixed(2)}
Novo preço: R$${novoPreco3.toFixed(2)}`)
}
else if (preco > 1500) {
    alert(`Preço atual: R$${preco.toFixed(2)}
Percentual de aumento: 5% 
Valor do aumento: R$${aumento4.toFixed(2)}
Novo preço: R$${novoPreco4.toFixed(2)}`)
}