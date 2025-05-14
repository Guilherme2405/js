function nome(nome) {
    return function () {
        return nome;
    }
}

const nomeUm = nome('gui')
const nomeDois = nome('guiga')
console.dir(nomeUm)
console.dir(nomeDois)

console.log(nomeUm(), nomeDois())