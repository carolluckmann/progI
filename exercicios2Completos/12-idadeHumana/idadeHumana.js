//É sabido que os caẽs amadurecem mais rapidamente do que os seres humanos (na verdade, alguns seres humanos parecem nunca amadurecer).
//Calcule a idade do seu cão, baseada nos seguintes fatores:
//- cães de porte pequeno: fator 5
//- cães de porte médio: fator 6
//- cães grandes: fator 7.

let cao = (prompt(`Insira o tamanho de seu cão:`))
let idade = Number (prompt(`Insira a idade de seu cão:`))

if (cao == `pequeno`) {
    let pequeno = idade * 5
    alert (`Seu cão tem ${pequeno} anos`)
}
else if (cao == `medio`) {
    let medio = idade * 6
    alert (`Seu cão tem ${medio} anos`)
}
else {
    let grande = idade * 7
    alert (`Seu cão tem ${grande} anos`)
}