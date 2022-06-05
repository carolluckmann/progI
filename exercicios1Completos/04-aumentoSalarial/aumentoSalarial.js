document.write ("Informe o salário: ")

const salario = Number(prompt("Informe o salário em R$: "))
const percentualAumento = Number(prompt("Informe o percentual de aumento: "))

const valorAumento = salario*(percentualAumento/100)
const novoSalario = salario + valorAumento

document.write ("</br> Seu novo salário é: " + novoSalario)