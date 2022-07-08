//Calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. A função recebe a, b e c e faz as consistências, informando ao usuário nas seguintes situações:
//    - Se o usuário informar o valor de A igual a zero é uma equação do 1o grau.
//    - Se o delta calculado for negativo, a equação não possui raízes reais.
//    - Se o delta calculado for igual a zero a equação possui apenas uma
//    raiz real. 
//    - Se o delta for positivo, a equação possui duas raízes reais.

let a = Number(prompt(`Insira o "a" da sua equação: `))
let b = Number(prompt(`Insira o "b" da sua equação: `))
let c = Number(prompt(`Insira o "c" da sua equação: `))

let delta = (b ** 2 - (4 * a * c));

if (a == 0) {
    alert(`É uma equação do 1º grau.`)
} else if (delta < 0 ){
    alert(`Não existem raízes reais.`)
} else if (delta ==   0) {
    alert(`A equação possui apenas uma raiz real.`)
} else if (delta > 0) {
    alert(`A equação possui duas raizes reais.`)
}
