class Pessoa {
    constructor(nome,sobrenome) { // toda classe carrega o constructor; o constructor e a diferença entra afunção construtora
        this.nome = nome,
        this.sobrenome = sobrenome
    }
    // em classes o uso do prototype nao seria tao necessario com uso do object.prototype
    falar(){console.log(`${this.nome} esta falando`)}  
    comer(){console.log(`${this.nome} esta comendo`)}
    beber(){console.log(`${this.nome} esta bebendo`)}
}

const p1 = new Pessoa ('guilherme', 'cataneo')
const p2 = new Pessoa ('bruna', 'cataneo')
const p3 = new Pessoa ('otavio', 'cataneo')
 p1.falar()
 p3.beber()

 // diferença com construtora
 
 function Pessoa2 (nome,sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
 }

Pessoa2.prototype.falar = function() {console.log(`${this.nome} esta falando`)}

const pp1 = new Pessoa ('p1: guilherme', 'cataneo')
const pp2 = new Pessoa ('p2: bruna', 'cataneo')

pp2.falar()