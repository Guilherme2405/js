function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomecompleto = () => 'original' + this.nome + ' ' + this.sobrenome; 
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome; 
//prototype == __proto__  == fica dentro da função construtora. Ela permite que voce possa usar referencias, para que n crie uma nova funçao toda fez que for usar a função ou algo caracteristico

const pessoa1 = new Pessoa('guilherme', 'cataneo')
const pessoa2 = new Pessoa('otavio', 'cataneo')

console.dir(pessoa1)
console.dir(pessoa2)