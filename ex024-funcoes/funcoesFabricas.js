function criaPessoa(nome,sobrenome,altura,peso) {
 return {
    nome,
    sobrenome,
    //getter
    // de get para uma função faz passar a função para um atributo 
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    },

    //setter
    // set serve para pegar um  valor de fora do objeto
    set nomeCompleto(valor){
        valor = valor.split(' ')
        this.nome = valor.shift() //argumento shift() === recebe e tira o valor do array
        this.sobrenome = valor.join(' ') // argumento join === rebece o valores do array
        console.log(valor)
    },

    fala: function(assunto){
        return `${this.nome} esta falando ${assunto}`
    },
    altura,
    peso,

    get imc() {
        // de get para uma função faz passar a função para um atributo 

        const imC = this.peso / (this.altura **2) 
        return imC.toFixed(2);
    }
 }
}

const pessoa1 = criaPessoa('otavio', 'cataneo',1.8,80);
const pessoa2 = criaPessoa('guilherme', 'cataneo',2,100);

/*

console.log(pessoa1.imc())

console.log(pessoa1.fala('javascript'))
console.log(pessoa2.fala('sobre funções'))

*/

console.log(pessoa1.nomeCompleto)
// usando get para passar a função como um atributo dentro do elemento posso executar como se fosse realmente um atributo

pessoa1.nomeCompleto = 'guiga to kirin'
console.log(pessoa1.imc)


