const falar = {
    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} esta bebendo`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`)
    }
}

const pessoaPrototype = {...falar,...beber,...comer} // composição mixing -> quando se usa metodos ou objetos sem ter um pai ou herdando de alguem/alguma função ou objeto

/* // criando um elemento com varios metodos para depois poder herdar esse prototype
const pessoaPrototype = {
    falar() {
        console.log(`${this.nome} esta falando`)
    },
    beber() {
        console.log(`${this.nome} esta bebendo`)
    },
    comer() {
        console.log(`${this.nome} esta comendo`)
    }
    
}
 */
function criaPessoa(nome,sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    });
}




const p1 = criaPessoa('guilherme','cataneo')
console.log(p1.comer())