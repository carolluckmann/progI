//Converta a nota para conceito, conforme a tabela abaixo:
//Nota                     Conceito
//Entre 10.0 e 9.0            A
//Entre 8.9 e 8.0             B
//Entre 7.9 e 7.0             C
//Entre 6.9 e 6.0             D
//Entre 5.9 e zero            E

let nota = parseInt(prompt(`Insira a nota: `))

if (nota >= 9 ) {
    alert(`Conceito: A`)
} else if (nota >= 8 && nota <= 8.9) {
    alert(`Conceito: B`)
} else if (nota >= 7 && nota <= 7.9) {
    alert(`Conceito: C`)
} else if (nota >= 6 && nota <= 6.9) {
    alert(`Conceito: D`)
} else {
    alert(`Conceito: E`)
}