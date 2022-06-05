document.write ("Recebe quantos metros quadrados precisa pintar, e retorna a quantidade de latas de tinta para comprar")

const metros = Number (prompt("Digite quantos m² precisa pintar: "))
const tinta = metros * 3
const lata = tinta / 18

const arredondamento = tinta % 18

if (arredondamento === 0) {
    document.write(`</br> Você vai precisar de ${Math.floor(lata)} latas de tinta para pintar ${metros}².`)
}
else {
    document.write (`</br> Arredondando para cima, você precisará de ${Math.floor(lata + 1)} latas de tinta para pintar`)
}