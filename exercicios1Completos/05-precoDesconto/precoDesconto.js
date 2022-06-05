//Recebe um preço e sua porcentagem de desconto, e retorna o novo preço.

document.write("Informe o preço e o desconto e te darei o novo preço! ")

const preco = Number (prompt("Informe o preço do produto em R$: "))
const percentualDesconto = Number (prompt("Informe o percentual de desconto: "))

const valorDesconto = preco*(percentualDesconto/100)
const novoPreco = preco - valorDesconto

document.write (` </br> O preço com desconto é: ${novoPreco} reais`)

//document.write (" </br> O preço com desconto é:" + novoPreco + " reais")